import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import {fetchPepople} from '../actions/people.action';

export const PeopleReducer = createSlice({
  name: 'PeopleReducer',
  initialState: initialState.people,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchPepople.pending, state => {
      state.loading;
    });
    builder.addCase(fetchPepople.fulfilled, (state, action) => {
      console.log('ReducerPeople', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchPepople.rejected, state => {
      state.loading = false;
    });
  },
});

