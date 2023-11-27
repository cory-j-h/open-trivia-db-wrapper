import type { CategoryNames, QuestionTypes } from "./enums";
/**
 * All the answers for a question.
 */
export declare type AllAnswers<T extends QuestionTypes> = T extends QuestionTypes.Boolean ? [BooleanString, BooleanString] : [string, string, string, string];
/**
 * A stringified boolean.
 */
export declare type BooleanString = `${boolean}`;
/**
 * The names of all categories.
 */
export declare type CategoryNameType = keyof typeof CategoryNames;
/**
 * A value that can be recognized as a category.
 */
export declare type CategoryResolvable = CategoryNameType | CategoryNames | number;
export declare type Dictionary<K extends string, V> = Record<K, V>;
export declare type ErrorCode = 1 | 2 | 3 | 4;
/**
 * All the incorrect answers for a question.
 */
export declare type IncorrectAnswers = [string, string, string];
/**
 * The different difficulty levels.
 */
export declare type QuestionDifficultyType = "easy" | "medium" | "hard";
/**
 * The different question encodings.
 */
export declare type QuestionEncodingType = "none" | "base64" | "url3986" | "urlLegacy";
/**
 * The different question types.
 */
export declare type QuestionTypeType = "multiple" | "boolean";
export declare type ResponseCode = 0 | ErrorCode;
export declare type SimpleDictionary = Dictionary<string, string | number>;
export declare type ExtendedDictionary<V extends unknown> = Dictionary<string, string | number | V>;
