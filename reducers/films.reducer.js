import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import { fetchFilms } from '../actions/films.action';

export const FilmsReducer = createSlice({
  name: 'FilmsReducer',
  initialState: initialState.films,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchFilms.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      console.log('ReducerFilms', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchFilms.rejected, state => {
      state.loading = false;
    });
  },
});
