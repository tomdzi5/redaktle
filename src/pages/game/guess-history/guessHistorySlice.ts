import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { GuessHistory } from '../../../types/guessHistory';

const MOCK_HISTORY = [
    {value: 'pies', id: 'id1', order: '0', hits: 1},
    {value: 'pies', id: 'id2', order: '0', hits: 1},
    {value: 'pies', id: 'id3', order: '0', hits: 1},
    {value: 'pies', id: 'id4', order: '0', hits: 1},
    {value: 'pies', id: 'id5', order: '0', hits: 1},
    {value: 'pies', id: 'id6', order: '0', hits: 1},
    {value: 'pies', id: 'id7', order: '0', hits: 1},
    {value: 'pies', id: 'id8', order: '0', hits: 1},
    {value: 'pies', id: 'id9', order: '0', hits: 1},
    {value: 'pies', id: 'id19', order: '0', hits: 1},
    {value: 'pies', id: 'id29', order: '0', hits: 1},
    {value: 'pies', id: 'id39', order: '0', hits: 1},
    {value: 'pies', id: 'id49', order: '0', hits: 1},
    {value: 'pies', id: 'id59', order: '0', hits: 1},
    {value: 'pies', id: 'id69', order: '0', hits: 1},
    {value: 'pies', id: 'id79', order: '0', hits: 1},
]

const initialState: GuessHistory = {
    words: MOCK_HISTORY,
};

export const guessHistorySlice = createSlice({
    name: 'guessHistory',
    initialState,
    reducers: {},
});

export const selectGuessHistory = (state: RootState) => state.guessHistory;

export default guessHistorySlice.reducer;