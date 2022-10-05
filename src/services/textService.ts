import { WordToGuess } from '../types/article';
import { POLISH_COMMON_WORDS, REGEX } from '../utils/constants';

export const textToArray = (text: string) => {
    const wordsArray = text.match(REGEX) as string[];
    return wordsArray;
};

export const blurWords = (words: string[]) => {
    return words.map((word) => {
        let wordToGuess: WordToGuess;

        if (POLISH_COMMON_WORDS.includes(word) || REGEX.test(word)) {
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
