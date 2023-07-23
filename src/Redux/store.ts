import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import data from './slices/dataSlice';
import board from './slices/currentBoardSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        data,
        board
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>