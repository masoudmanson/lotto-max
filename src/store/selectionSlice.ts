import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SelectionState {
  potSize: number;
  selected: number[];
  total: number;
  winning: number[];
}

const initialState: SelectionState = {
  potSize: 49,
  selected: [],
  total: 6,
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
      if (state.selected.length !== state.total || state.winning.length) return;

      while(state.winning.length < state.total) {
        const randomNumber = Math.floor(Math.random() * state.potSize) + 1;

        if(!state.winning.includes(randomNumber)) {
          state.winning.push(randomNumber);
        }
      }
    },
    autoPick: (state) => {
      if(state.selected.length || state.winning.length) return;

      while(state.selected.length < state.total) {
        const randomNumber = Math.floor(Math.random() * state.potSize) + 1;

        if(!state.selected.includes(randomNumber)) {
          state.selected.push(randomNumber);
        }
      }
    },
    reset: (state) => {
      if (!state.winning.length) return;

      state.selected = [];
      state.winning = [];
    }
  },
});

export const { autoPick, select, deselect, draw, reset } = selectionSlice.actions;

export default selectionSlice.reducer;