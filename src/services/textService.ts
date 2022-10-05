import { BLUR_CHARACTER, POLISH_COMMON_WORDS } from '../utils/constants';

export const textToArray = (text: string) => {
    return text.split(' ');
};

export const blurWords = (words: string[]) => {
    return words.map((word) => {
        if (POLISH_COMMON_WORDS.includes(word)) {
            return word;
        }

        return BLUR_CHARACTER.repeat(word.length);
    });
};

console.log(blurWords(['hello']));
