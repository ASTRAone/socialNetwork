import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import {fetchPeople} from '../actions/people.action';

export const PeopleReducer = createSlice({
  name: 'PeopleReducer',
  initialState: initialState.people,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchPeople.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      console.log('ReducerPeople', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchPeople.rejected, state => {
      state.loading = false;
    });
  },
});

