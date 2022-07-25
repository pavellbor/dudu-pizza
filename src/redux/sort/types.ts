export enum SortMap {
  EXPENSIVE = 'Сначала дорогие',
  CHEAP = 'Сначала дешевые',
}

export type SortValue = SortMap;

export interface SortState {
  value: SortValue;
}
