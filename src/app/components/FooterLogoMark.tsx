import creamLogo from "../../imports/ChangeMoment_Logo_bold_cream_2.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type FooterLogoMarkProps = {
  className?: string;
  title?: string;
};

export function FooterLogoMark({ className = "", title = "ChangeMoment Mental Health Center" }: FooterLogoMarkProps) {
  return (
    <ImageWithFallback
      src={creamLogo}
      alt={title}
      className={`block w-auto max-w-full shrink-0 ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}
