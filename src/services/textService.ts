import {
    POLISH_COMMON_WORDS,
    LETTERS_AND_PUNCTUATION_REGEX,
    PUNCTUATION_REGEX,
} from '../utils/constants';

export const textToArray = (text: string) => {
    console.log(text.match(LETTERS_AND_PUNCTUATION_REGEX));
    return text.match(LETTERS_AND_PUNCTUATION_REGEX) as string[];
};

export const createWordsToGuessObjects = (words: string[]) => {
    return words.map((word) => {
        if (word === ' ') {
            return {
                word,
                isVisible: true,
            };
        }
        return {
            word,
            isVisible:
                POLISH_COMMON_WORDS.includes(word) ||
                PUNCTUATION_REGEX.test(word),
        };
    });
};
