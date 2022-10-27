import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

import { RootState } from '../../../app/store';
import { guessStateType } from '../../../types/guessStateType';
import { POLISH_COMMON_WORDS } from '../../../utils/constants';
import { areWordsEqual } from '../../../services/textService';

const initialState: guessStateType = {
    guessHistory: [],
    isAlreadyGuessed: false,
};

export const guessSlice = createSlice({
    name: 'guess',
    initialState,
    reducers: {
        setGuessText: (state, action: PayloadAction<string>) => {
            const guessedWord = action.payload.toLowerCase();
            const updatedGuessWordsArray = [
                ...state.guessHistory,
                {
                    value: guessedWord.toLowerCase(),
                    id: uuid(),
                    order: `${state.guessHistory.length}`,
                },
            ];

            const isAlreadyGuessed =
                state.guessHistory.some(
                    ({ value }) => areWordsEqual(value, guessedWord)
                ) || POLISH_COMMON_WORDS.includes(guessedWord);

            return {
                guessHistory: isAlreadyGuessed
                    ? state.guessHistory
                    : updatedGuessWordsArray,
                isAlreadyGuessed,
            };
        },
        onAlreadyGuessedToastClose: (state) => {
            state.isAlreadyGuessed = false;
        },
    },
});

export const selectGuess = (state: RootState) => state.guess;

export const selectGuessHistoryWithHits = (state: RootState) => {
    return state.guess.guessHistory.map((guess) => {
        return {
            ...guess,
            hits: state.article.data.text.filter(({ word }) => areWordsEqual(word, guess.value)).length
        }
    })
}

export const { setGuessText, onAlreadyGuessedToastClose } = guessSlice.actions;

export default guessSlice.reducer;
