import creamLogo from "../../imports/ChangeMoment_Logo_bold_cream.svg";
import whiteLogo from "../../imports/ChangeMoment_Logo_bold_white.svg";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LogoProps {
  /** kept for compatibility with existing usage */
  withName?: boolean;
  /** rendered logo height in px */
  size?: number;
  className?: string;
  /** render the white logo for footer/dark backgrounds */
  light?: boolean;
}

export function LogoMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return <Logo withName={false} size={size} className={className} />;
}

export function Logo({ size = 40, className = "", light = false }: LogoProps) {
  const src = light ? whiteLogo : creamLogo;

  return (
    <ImageWithFallback
      src={src}
      alt="ChangeMoment"
      className={`block h-auto w-auto max-w-none shrink-0 ${className}`}
      style={{ height: size }}
      loading="eager"
      decoding="async"
    />
  );
}
