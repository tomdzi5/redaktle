import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    text: '',
}

export const guessSlice = createSlice({
    name: 'guess',
    initialState,
    reducers : {
        setGuessText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

// export const selectGuess = (state: RootState) => state.guess;

export const { setGuessText } = guessSlice.actions;

export default guessSlice.reducer;