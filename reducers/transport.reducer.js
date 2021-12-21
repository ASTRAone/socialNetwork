import {
  ActionReducerMapBuilder,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import { fetchTransport } from '../actions/transport.actions';

export const TransportReducer = createSlice({
  name: 'TechnologiesReducer',
  initialState: initialState.transport,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(fetchTransport.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchTransport.fulfilled, (state, action) => {
      console.log('TransportReducer', action.payload);
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(fetchTransport.rejected, state => {
      state.loading = false;
    });
  },
});

