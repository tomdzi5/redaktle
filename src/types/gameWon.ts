import { WordToGuess } from './article';

export type GameWonSliceType = {
    title: WordToGuess[];
    isGameWon: boolean;
};
