import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import {fetchTechnologies} from '../actions/technologies.action';

export const TechnologiesReducer = createSlice({
  name: 'TechnologiesReducer',
  initialState: initialState.technologies,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchTechnologies.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTechnologies.fulfilled, (state, action) => {
      console.log('ReducerTechnologies', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchTechnologies.rejected, state => {
      state.loading = false;
    });
  },
});

