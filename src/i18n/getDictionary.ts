import { en } from "./dictionaries/en";
import { ar } from "./dictionaries/ar";
import type { Dictionary } from "./dictionaries/types";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export type Dict = Dictionary;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}
