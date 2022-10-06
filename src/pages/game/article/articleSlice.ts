import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchArticle } from '../../../services/apiService';
import { LOADING_STATUS } from '../../../utils/constants';
import { RootState } from '../../../app/store';

const initialState = {
    data: {
        title: '',
        text: '',
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
                state.data = action.payload;
            })
            .addCase(getArticle.rejected, (state) => {
                state.status = LOADING_STATUS.FAILED;
            });
    },
});

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
