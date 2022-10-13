import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    
};

export const alreadyGuessedToastSlice = createSlice({
    name: 'alreadyGuessedToast',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase()
    },
});
