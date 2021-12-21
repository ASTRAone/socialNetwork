import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import { fetchVariety } from '../actions/variety.actions';

export const VarietyReducer = createSlice({
  name: 'VarietyReducer',
  initialState: initialState.variety,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchVariety.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchVariety.fulfilled, (state, action) => {
      console.log('VarietyReducer', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchVariety.rejected, state => {
      state.loading = false;
    });
  },
});

