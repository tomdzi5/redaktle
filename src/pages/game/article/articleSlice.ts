import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchArticle } from '../../../services/apiService';
import { LOADING_STATUS } from '../../../utils/constants';
import { RootState } from '../../../app/store';
import { blurWords, textToArray } from '../../../services/textService';
import { ArticleSliceType } from '../../../types/article';

const initialState: ArticleSliceType = {
    data: {
        title: [],
        text: [],
    },
    status: LOADING_STATUS.IDLE,
};

export const getArticle = createAsyncThunk('game/getArticle', async () => {
    const response = await fetchArticle();
    return response.data;
});

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticle.pending, (state) => {
                state.status = LOADING_STATUS.LOADING;
            })
            .addCase(getArticle.fulfilled, (state, action) => {
                state.status = LOADING_STATUS.IDLE;
                const titleWordArray = textToArray(action.payload.title);
                const textWordArray = textToArray(action.payload.text);
                const titleToGuessArray = blurWords(titleWordArray);
                const textToGuessArray = blurWords(textWordArray);
                state.data = {
                    title: titleToGuessArray,
                    text: textToGuessArray,
                };
            })
            .addCase(getArticle.rejected, (state) => {
                state.status = LOADING_STATUS.FAILED;
            });
    },
});

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
