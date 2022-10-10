import { WordToGuess } from '../types/article';
import {
    POLISH_COMMON_WORDS,
    LETTERS_AND_PUNCTUATION_REGEX,
} from '../utils/constants';

export const textToArray = (text: string) => {
    const wordsArray = text.match(LETTERS_AND_PUNCTUATION_REGEX) as string[];
    return wordsArray;
};

export const blurWords = (words: string[]) => {
    return words.map((word) => {
        let wordToGuess: WordToGuess;

        if (
            POLISH_COMMON_WORDS.includes(word) ||
            LETTERS_AND_PUNCTUATION_REGEX.test(word)
        ) {
            wordToGuess = {
                word,
                isGuessed: true,
            };
            return wordToGuess;
        }

        wordToGuess = {
            word,
            isGuessed: false,
        };
        return wordToGuess;
    });
};
