import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticle } from '../../../services/apiService';
import { LOADING_STATUS } from '../../../utils/constants';
import { RootState } from '../../../app/store';
import {
    createWordsToGuessObjects,
    textToArray,
} from '../../../services/textService';
import { ArticleSliceType } from '../../../types/article';
import { setGuessText } from '../guess-bar/guessSlice';

const isWordGuessed = (word: string, guess: string) =>
    word.toLocaleLowerCase() === guess.toLocaleLowerCase();

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
                const titleToGuessArray =
                    createWordsToGuessObjects(titleWordArray);
                const textToGuessArray =
                    createWordsToGuessObjects(textWordArray);
                state.data = {
                    title: titleToGuessArray,
                    text: textToGuessArray,
                };
            })
            .addCase(getArticle.rejected, (state) => {
                state.status = LOADING_STATUS.FAILED;
            })
            .addCase(setGuessText, (state, action: PayloadAction<string>) => {
                const guess = action.payload;
                const titleArray = state.data.title.map(({ word }) => {
                    return {
                        word: word,
                        isVisible: isWordGuessed(word, guess),
                    };
                });

                const textArray = state.data.text.map(({ word }) => {
                    return {
                        word: word,
                        isVisible: isWordGuessed(word, guess),
                    };
                });

                state.data = {
                    title: titleArray,
                    text: textArray,
                };
            });
    },
});

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
