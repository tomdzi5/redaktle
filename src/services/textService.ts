import {
    POLISH_COMMON_WORDS,
    LETTERS_AND_PUNCTUATION_REGEX,
} from '../utils/constants';

export const textToArray = (text: string) => {
    return text.match(LETTERS_AND_PUNCTUATION_REGEX) as string[];
};

export const blurWords = (words: string[]) => {
    return words.map((word) => {
        if (
            POLISH_COMMON_WORDS.includes(word) ||
            LETTERS_AND_PUNCTUATION_REGEX.test(word)
        ) {
            return {
                word,
                isGuessed: true,
            };
        }

        return {
            word,
            isGuessed: false,
        };
    });
};
