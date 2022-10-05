import { WordToGuess } from '../types/article';
import { POLISH_COMMON_WORDS, REGEX } from '../utils/constants';

export const textToArray = (text: string) => {
    const wordsArray = text.match(REGEX) as string[];
    return wordsArray;
};

export const blurWords = (words: string[]) => {
    return words.map((word) => {
        let wordToGuess: WordToGuess;

        if (POLISH_COMMON_WORDS.includes(word)) {
            wordToGuess = {
                word,
                isGuessed: true,
            };
        }

        wordToGuess = {
            word,
            isGuessed: false,
        };

        return wordToGuess;
    });
};

console.log(blurWords(['hello']));
