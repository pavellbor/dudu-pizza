import { RootState } from '../store';

export const selectSortValue = (state: RootState) => state.sort.value;
