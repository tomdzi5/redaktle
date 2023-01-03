import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchArticle } from '../../../services/apiService';
import { LOADING_STATUS } from '../../../utils/constants';
import { RootState } from '../../../app/store';
import {
    areWordsEqual,
    createWordsToGuessObjects,
    textToArray,
} from '../../../services/textService';
import { ArticleSliceType, WordToGuess } from '../../../types/article';
import { setGuessText } from '../guess-bar/guessSlice';

const initialState: ArticleSliceType = {
    data: {
        title: [],
        text: [],
    },
    isGameWon: false,
    status: LOADING_STATUS.IDLE,
};

const createGuessValidatedWord = (
    { word, isVisible }: WordToGuess,
    guess: string
): WordToGuess => {
    const isWordGuessed = areWordsEqual(word, guess);

    return {
        word,
        isVisible: isVisible || isWordGuessed,
    };
};

const revealWord = (word: string): WordToGuess => {
    return {
        word,
        isVisible: true,
    }
}

export const getArticle = createAsyncThunk('game/getArticle', async () => {
    const response = await fetchArticle();

    return {
        title: response.title,
        text: response.extract,
    };
});

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        resetWonStatus: (state) => {
            state.isGameWon = false;
        },
    },
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
                const titleArray = state.data.title.map((wordToGuess) =>
                    createGuessValidatedWord(wordToGuess, guess)
                );

                const isGameWon = titleArray.every(({ isVisible }) => isVisible);

                const textArray = state.data.text.map((wordToGuess) =>
                    isGameWon ? revealWord(wordToGuess.word) : createGuessValidatedWord(wordToGuess, guess)
                );

                return {
                    isGameWon,
                    data: {
                        title: titleArray,
                        text: textArray,
                    },
                    status: LOADING_STATUS.IDLE,
                };
            });
    },
});

export const { resetWonStatus } = articleSlice.actions;

export const selectArticle = (state: RootState) => state.article;

export default articleSlice.reducer;
