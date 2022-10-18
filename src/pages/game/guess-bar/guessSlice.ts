import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { guessStateType } from '../../../types/guessStateType';
import { POLISH_COMMON_WORDS } from '../../../utils/constants';

const initialState: guessStateType = {
    guessedWords: [],
    isAlreadyGuessed: false,
};

export const guessSlice = createSlice({
    name: 'guess',
    initialState,
    reducers: {
        setGuessText: (state, action: PayloadAction<string>) => {
            const guessedWord = action.payload;
            const updatedGuessWordsArray = [...state.guessedWords, guessedWord];

            if (state.guessedWords.length === 0) {
                return (state = {
                    guessedWords: updatedGuessWordsArray,
                    isAlreadyGuessed: false,
                });
            }

            const isAlreadyGuessed =
                state.guessedWords.includes(action.payload) ||
                POLISH_COMMON_WORDS.includes(action.payload);

            return (state = {
                guessedWords: isAlreadyGuessed
                    ? state.guessedWords
                    : updatedGuessWordsArray,
                isAlreadyGuessed,
            });
        },
        resetGame: (state) => {
            state.isAlreadyGuessed = false;
        },
    },
});

export const selectGuess = (state: RootState) => state.guess;

export const { setGuessText, resetGame } = guessSlice.actions;

export default guessSlice.reducer;
