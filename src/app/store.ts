import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import articleReducer from '../pages/game/article/articleSlice';
import guessReducer from '../pages/game/guess-bar/guessSlice';

export const store = configureStore({
    reducer: {
        article: articleReducer,
        guess: guessReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
