"use client";

import * as React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Icon } from "./Icon";

interface Props {
  variant?: "header" | "mobile" | "pill";
  className?: string;
}

export function LanguageSwitcher({ variant = "header", className = "" }: Props) {
  const { locale, toggleLocale } = useLanguage();
  const isArabic = locale === "ar";

  if (variant === "mobile") {
    return (
      <button
        onClick={toggleLocale}
        className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-fg)] hover:border-[var(--color-accent)]/50 transition-all ${className}`}
        aria-label="Switch Language"
      >
        <span className="flex items-center gap-2.5">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-semibold">
            🌐
          </span>
          <span>{isArabic ? "English (English)" : "العربية (Arabic)"}</span>
        </span>
        <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-xs font-bold text-white shadow-sm">
          {isArabic ? "EN" : "عربي"}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLocale}
      className={`group relative inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-fg)] transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-elevated)] hover:shadow-md hover:scale-105 active:scale-95 ${className}`}
      title={isArabic ? "Switch to English" : "التحويل إلى العربية"}
      aria-label={isArabic ? "Switch to English" : "التحويل إلى العربية"}
    >
      <span className="text-[13px] opacity-75 group-hover:opacity-100 transition-opacity">
        🌐
      </span>
      <span className="font-semibold tracking-wide">
        {isArabic ? "English" : "العربية"}
      </span>
      <span className="ms-0.5 rounded-md bg-[var(--color-accent-soft)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--color-accent)] uppercase">
        {isArabic ? "EN" : "AR"}
      </span>
    </button>
  );
}
