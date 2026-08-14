/**
 * Language-aware text normalisation + typo-tolerant matching used by the
 * services search. Works for English, French and Persian:
 *
 *  - French: accents/ligatures are folded (é→e, ç→c, œ→oe) so "therapie"
 *    finds "thérapie".
 *  - Persian: Arabic/Persian letter variants are folded (آ/أ/إ→ا, ي/ى→ی,
 *    ك→ک, ة→ه), diacritics, tatweel and ZWNJ are stripped, and Arabic-Indic
 *    digits are converted, so "ارامش" finds "آرامش".
 *  - All: small typos are tolerated via a bounded Levenshtein distance, so
 *    "aniexty" still finds "anxiety".
 */

const ZERO_WIDTH = /[​-‏‪-‮⁠-⁤﻿]/g;
const ARABIC_MARKS = /[ً-ٰٟـ]/g;
const LATIN_MARKS = /[̀-ͯ]/g;

export function normalize(str: string): string {
  return (
    str
      // decompose so Latin accents become base letter + combining mark
      .normalize("NFD")
      .replace(LATIN_MARKS, "")
      .toLowerCase()
      // Persian/Arabic diacritics, tatweel and zero-width joiners
      .replace(ARABIC_MARKS, "")
      .replace(ZERO_WIDTH, "")
      // Persian/Arabic letter folding
      .replace(/[آأإٱٲٳٵ]/g, "ا") // آ أ إ ٱ → ا
      .replace(/[يىےئ]/g, "ی") // ي ى ے ئ → ی
      .replace(/ك/g, "ک") // ك → ک
      .replace(/[ةۀ]/g, "ه") // ة ۀ → ه
      .replace(/ؤ/g, "و") // ؤ → و
      // Arabic-Indic + Persian digits → ASCII
      .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
      .replace(/[۰-۹]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      // French/German ligatures
      .replace(/œ/g, "oe")
      .replace(/æ/g, "ae")
      .replace(/ß/g, "ss")
      // punctuation → space so tokens split cleanly
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim()
  );
}

export function tokenize(str: string): string[] {
  const n = normalize(str);
  return n ? n.split(" ") : [];
}

/** Typos allowed for a token of this length. */
function tolerance(len: number): number {
  if (len <= 3) return 0;
  if (len <= 6) return 1;
  return 2;
}

/** Levenshtein distance, aborting as soon as it provably exceeds `max`. */
function withinDistance(a: string, b: string, max: number): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > max) return false;
  if (max === 0) return false;

  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const d = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      curr.push(d);
      if (d < rowMin) rowMin = d;
    }
    if (rowMin > max) return false;
    prev = curr;
  }
  return prev[b.length] <= max;
}

/**
 * True when `token` matches somewhere in the already-normalised `words`,
 * either as a substring or as a near-miss of a word (or of a word's prefix,
 * so partial typing keeps working).
 */
function tokenMatchesWords(token: string, haystack: string, words: string[]): boolean {
  if (haystack.includes(token)) return true;

  const max = tolerance(token.length);
  if (max === 0) return false;

  for (const word of words) {
    if (withinDistance(token, word, max)) return true;
    // typo-tolerant prefix match: "afsordegii" vs the start of a longer word
    if (word.length > token.length && withinDistance(token, word.slice(0, token.length), max)) {
      return true;
    }
  }
  return false;
}

/** A haystack prepared once per field so repeated keystrokes stay cheap. */
export interface Haystack {
  text: string;
  words: string[];
}

export function makeHaystack(...parts: string[]): Haystack {
  const text = normalize(parts.join(" "));
  return { text, words: text ? text.split(" ") : [] };
}

/** Every query token must match the haystack (AND semantics). */
export function matchesHaystack(tokens: string[], hay: Haystack): boolean {
  if (tokens.length === 0) return false;
  return tokens.every((tk) => tokenMatchesWords(tk, hay.text, hay.words));
}
