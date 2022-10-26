import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { guessStateType, HistoryWord } from '../../../types/guessStateType';
import { POLISH_COMMON_WORDS } from '../../../utils/constants';

const MOCK_HISTORY: HistoryWord[] = [];

const initialState: guessStateType = {
    guessHistory: MOCK_HISTORY,
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
                    id: '0',
                    order: '0',
                    hits: 1,
                }, // mock of guess object for convinience
            ];

            const isAlreadyGuessed =
                state.guessHistory.some(
                    ({ value }) => value.toLowerCase() === guessedWord
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

export const { setGuessText, onAlreadyGuessedToastClose } = guessSlice.actions;

export default guessSlice.reducer;
