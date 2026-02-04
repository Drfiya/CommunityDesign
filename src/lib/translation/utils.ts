import { createHash } from 'crypto';

/**
 * Supported language codes (ISO 639-1)
 */
export const SUPPORTED_LANGUAGES = [
    'en', 'de', 'es', 'fr', 'ja', 'pt', 'zh', 'ko', 'ar', 'it'
] as const;

export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

/**
 * Language names in their native form
 */
export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français',
    ja: '日本語',
    pt: 'Português',
    zh: '中文',
    ko: '한국어',
    ar: 'العربية',
    it: 'Italiano',
};

/**
 * Generate a SHA-256 hash of the given text
 * Used for cache invalidation when content changes
 */
export function hashContent(text: string): string {
    return createHash('sha256').update(text).digest('hex');
}

/**
 * Check if a language code is supported
 */
export function isSupportedLanguage(code: string): code is SupportedLanguage {
    return SUPPORTED_LANGUAGES.includes(code as SupportedLanguage);
}

/**
 * Get the native name for a language code
 */
export function getLanguageName(code: string): string {
    if (isSupportedLanguage(code)) {
        return LANGUAGE_NAMES[code];
    }
    return code.toUpperCase();
}
