import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelectionState {
  selected: number[];
  total: number;
  winning: number[];
}

const initialState: SelectionState = {
  selected: [],
  total: 7,
  winning: []
};

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<number>) => {
        state.selected.push(action.payload);
    },
    deselect: (state, action: PayloadAction<number>) => {
        const newSelected = [...state.selected];
        const index = newSelected.findIndex(item => item === action.payload);
        newSelected.splice(index, 1);

        state.selected = newSelected;
    },
    draw: (state) => {
      while(state.winning.length < state.total) {
        const randomNumber = Math.floor(Math.random() * 50);

        if(!state.winning.includes(randomNumber)) {
          state.winning.push(randomNumber);
        }
      }
    },
    autoPick: (state) => {
      while(state.selected.length < state.total) {
        const randomNumber = Math.floor(Math.random() * 50);

        if(!state.selected.includes(randomNumber)) {
          state.selected.push(randomNumber);
        }
      }
    },
    reset: (state) => {
      state.selected = [];
      state.winning = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { autoPick, select, deselect, draw, reset } = selectionSlice.actions;

export default selectionSlice.reducer;