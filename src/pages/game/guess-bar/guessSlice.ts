import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { guessStateType } from '../../../types/guessStateType';
import { POLISH_COMMON_WORDS } from '../../../utils/constants';

const MOCK_HISTORY = [
    {
        value: '1',
        id: 'id1',
        order: '1',
        hits: 2,
    },
];

const initialState: guessStateType = {
    guessHistory: MOCK_HISTORY,
    isAlreadyGuessed: false,
};

export const guessSlice = createSlice({
    name: 'guess',
    initialState,
    reducers: {
        setGuessText: (state, action: PayloadAction<string>) => {
            const guessedWord = action.payload;
            const updatedGuessWordsArray = [
                ...state.guessHistory,
                {
                    value: guessedWord,
                    id: '0',
                    order: '0',
                    hits: 1,
                }, // mock of guess object for convinience
            ];

            const isAlreadyGuessed =
                !!state.guessHistory.find(
                    ({ value }) => value === action.payload
                ) || POLISH_COMMON_WORDS.includes(action.payload);

            return {
                guessHistory: isAlreadyGuessed
                    ? state.guessHistory
                    : updatedGuessWordsArray,
                isAlreadyGuessed,
            };
        },
        onToastClose: (state) => {
            state.isAlreadyGuessed = false;
        },
    },
});

export const selectGuess = (state: RootState) => state.guess;

export const { setGuessText, onToastClose } = guessSlice.actions;

export default guessSlice.reducer;
