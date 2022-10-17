import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
    createGuessValidatedWord,
    createWordsToGuessObjects,
    textToArray,
} from '../../../services/textService';
import { WordToGuess } from '../../../types/article';
import { GameWonSliceType } from '../../../types/gameWon';
import { getArticle } from '../article/articleSlice';
import { setGuessText } from '../guess-bar/guessSlice';

const checkIfGameWon = (titleArray: WordToGuess[]) => {
    let counter = 0;

    titleArray.forEach(({ isVisible }) => {
        if (isVisible) counter++;
    });

    return counter === titleArray.length;
};

const initialState: GameWonSliceType = {
    title: [],
    isGameWon: false,
};

export const gameWonSlice = createSlice({
    name: 'gameWon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getArticle.fulfilled, (state, action) => {
                const titleWordArray = textToArray(action.payload.title);
                const titleToGuessArray =
                    createWordsToGuessObjects(titleWordArray);

                return (state = {
                    title: titleToGuessArray,
                    isGameWon: false,
                });
            })
            .addCase(setGuessText, (state, action: PayloadAction<string>) => {
                const guessedWord = action.payload;

                const titleArray = state.title.map(({ word }) => {
                    return createGuessValidatedWord(word, guessedWord);
                });

                return (state = {
                    title: titleArray,
                    isGameWon: checkIfGameWon(titleArray),
                });
            });
    },
});

export default gameWonSlice.reducer;
