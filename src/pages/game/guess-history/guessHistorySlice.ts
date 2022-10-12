import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { GuessHistory } from '../../../types/guessHistory';

const initialState: GuessHistory = {
    words: [],
};

export const guessHistorySlice = createSlice({
    name: 'guessHistory',
    initialState,
    reducers: {},
});

export const selectGuessHistory = (state: RootState) => state.guessHistory;

export default guessHistorySlice.reducer;
