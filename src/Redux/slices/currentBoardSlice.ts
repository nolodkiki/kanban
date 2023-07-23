import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store'
import { Column } from '../../interfaces/data';





interface CurrentBoard {
    id: number;
    name: string;
    columns: Column[];
}

interface CounterState {
    board: CurrentBoard
}

const initialState: CounterState = {
    board: {
        id: 0,
        name: '',
        columns: []
    },
}
export const currentBoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        getCurrentBoard: (state, action) => {
            state.board = action.payload
        }
    }
})

export const { getCurrentBoard } = currentBoardSlice.actions

export const selectCount = (state: RootState) => state.data

export default currentBoardSlice.reducer