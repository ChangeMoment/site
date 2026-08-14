import {
  Video,
  User,
  HeartHandshake,
  Users,
  Waves,
  CloudSun,
  ShieldCheck,
  Feather,
  Flame,
  Sparkles,
  Baby,
  Heart,
  ShieldHalf,
  ClipboardCheck,
  FileHeart,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Video,
  User,
  HeartHandshake,
  Users,
  Waves,
  CloudSun,
  ShieldCheck,
  Feather,
  Flame,
  Sparkles,
  Baby,
  Heart,
  ShieldHalf,
  ClipboardCheck,
  FileHeart,
};

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  const Icon = map[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.4} />;
}
