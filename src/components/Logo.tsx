import * as React from "react";

export function Logo({
  size = 42,
  variant = "icon",
  locale = "en",
  className = "",
}: {
  size?: number;
  variant?: "icon" | "full" | "text";
  locale?: string;
  className?: string;
}) {
  // Joudah Al-Ibtkar (JIC) logo — aspect ratio ~3.5:1 (1400x400 viewBox)
  const height = size;
  const width = size * 3.5;

  return (
    <img
      src="/images/jic_logo.svg"
      alt="Joudah Al-Ibtkar"
      width={width}
      height={height}
      className={`h-auto object-contain ${className}`}
      style={{ height: `${height}px` }}
      loading="eager"
    />
  );
}
