import type { CategoryNames } from "./enums";

export type CategoryNameType = keyof typeof CategoryNames;
export type CategoryResolvable = CategoryNameType | CategoryNames | number;
export type Dictionary<K extends string, V> = Record<K, V>;
export type ErrorCode = 1 | 2 | 3 | 4;
export type QuestionDifficultyType = "easy" | "medium" | "hard";
export type QuestionEncodingType = "none" | "base64" | "url3986" | "urlLegacy";
export type QuestionTypeType = "multiple" | "boolean";
export type ResponseCode = 0 | ErrorCode;
export type SimpleDictionary = Dictionary<string, string | number>;
export type ExtendedDictionary<V extends unknown> = Dictionary<
  string,
  string | number | V
>;
