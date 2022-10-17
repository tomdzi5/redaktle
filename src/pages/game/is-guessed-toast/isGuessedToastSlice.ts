import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { isGuessedToastSliceType } from '../../../types/isGuessedToastSlice';
import { POLISH_COMMON_WORDS } from '../../../utils/constants';
import { setGuessText } from '../guess-bar/guessSlice';

const initialState: isGuessedToastSliceType = {
    guessedWords: [],
    isAlreadyGuessed: false,
};

export const guessedWordsSlice = createSlice({
    name: 'isGuessedToastSlice',
    initialState,
    reducers: {
        setAlreadyGuessedState: (state, action: PayloadAction<boolean>) => {
            state.isAlreadyGuessed = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            setGuessText,
            (state, action: PayloadAction<string>) => {
                const guessedWord = action.payload;
                const updatedGuessWordsArray = [
                    ...state.guessedWords,
                    guessedWord,
                ];

                if (state.guessedWords.length === 0) {
                    return (state = {
                        guessedWords: updatedGuessWordsArray,
                        isAlreadyGuessed: false,
                    });
                }

                const isAlreadyGuessed =
                    state.guessedWords.includes(action.payload) ||
                    POLISH_COMMON_WORDS.includes(action.payload);
                    
                return (state = {
                    guessedWords: isAlreadyGuessed
                        ? state.guessedWords
                        : updatedGuessWordsArray,
                    isAlreadyGuessed,
                });
            }
        );
    },
});

export const selectGuessedWords = (state: RootState) => state.guessedWords;

export const { setAlreadyGuessedState } = guessedWordsSlice.actions;

export default guessedWordsSlice.reducer;
