import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { SortMap, SortState, SortValue } from './types';

const initialState: SortState = {
  value: SortMap.EXPENSIVE,
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortValue: (state, action: PayloadAction<SortValue>) => {
      state.value = action.payload;
    },
  },
});

export const { setSortValue } = sortSlice.actions;
export default sortSlice.reducer;
