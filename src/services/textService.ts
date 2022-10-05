import { BLUR_CHARACTER, POLISH_COMMON_WORDS, REGEX } from '../utils/constants';

export const textToArray = (text: string) => {
    return text.split(' ');
};

export const blurWords = (words: string[]) => {
    return words.map((word) => {
        if (POLISH_COMMON_WORDS.includes(word)) {
            return word;
        }

        if (word.search(REGEX) > 1) {
            return BLUR_CHARACTER.repeat(word.length - 1) + word.slice(-1);
        }

        return BLUR_CHARACTER.repeat(word.length);
    });
};
