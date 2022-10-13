import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import {
    createWordsToGuessObjects,
    textToArray,
} from '../../../services/textService';
import { GameWonSliceType } from '../../../types/gameWon';
import { getArticle } from '../article/articleSlice';

const initialState: GameWonSliceType = {
    title: [],
    isGameWon: false,
};

export const gameWonSlice = createSlice({
    name: 'gameWon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticle.fulfilled, (state, action) => {
            const titleWordArray = textToArray(action.payload.title);
            const titleToGuessArray = createWordsToGuessObjects(titleWordArray);

            state = {
                title: titleToGuessArray,
                isGameWon: false,
            };
        })
        .addCase();
    },
});

export const selectGameWon = (state: RootState) => state.gameWon;

export default gameWonSlice.reducer;
