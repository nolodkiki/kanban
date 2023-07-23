

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { Data } from '../../interfaces/data';


interface CounterState {
    data: Data;
}

const initialState: CounterState = {
    data: {
        boards: [],
    },
};

// Получение данных из файла data.json
export const fetchInitialState = createAsyncThunk<Data, void>(
    'data/fetchInitialState',
    async () => {
        try {
            const response = await fetch('../../../data.json');
            const jsonData = await response.json();
            return jsonData;
        } catch (error) {
            console.error('Ошибка чтения файла:', error);
            throw error;
        }
    }
);

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchInitialState.fulfilled, (state, action) => {
            state.data = { ...action.payload };
        });
    },
});

export const selectCount = (state: RootState) => state.data;

export default dataSlice.reducer;
