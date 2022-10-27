import {
    POLISH_COMMON_WORDS,
    LETTERS_AND_PUNCTUATION_REGEX,
    PUNCTUATION_REGEX,
} from '../utils/constants';

export const textToArray = (text: string) => {
    return text.match(LETTERS_AND_PUNCTUATION_REGEX) as string[];
};

export const createWordsToGuessObjects = (words: string[]) => {
    return words.map((word) => {
        const isSpaceChar = word === ' ';
        const isCommonWord = POLISH_COMMON_WORDS.includes(word.toLowerCase());
        const isSpecialChar = PUNCTUATION_REGEX.test(word.toLowerCase());

        return {
            word,
            isVisible: isSpaceChar || isCommonWord || isSpecialChar,
        };
    });
};

export const areWordsEqual = (word1: string, word2: string) => word1.toLowerCase() === word2.toLowerCase();
