import { WordToGuess } from '../types/article';
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
        const isCommonWord = POLISH_COMMON_WORDS.includes(word);
        const isSpecialChar = PUNCTUATION_REGEX.test(word);

        return {
            word,
            isVisible: isSpaceChar || isCommonWord || isSpecialChar,
        };
    });
};

export const createGuessValidatedWord = (
    { word, isVisible }: WordToGuess,
    guess: string
): WordToGuess => {
    const isWordGuessed =
        word.toLocaleLowerCase() === guess.toLocaleLowerCase();
    return {
        word,
        isVisible: isVisible || isWordGuessed,
    };
};
