import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { SearchState } from './types';

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
