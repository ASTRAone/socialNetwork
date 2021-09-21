import {ActionReducerMapBuilder, createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState from '../store/initialState';
import {fetchPepople} from '../actions/people.action';

export const PeopleReducer = createSlice({
    name: 'PeopleReducer',
    initialState: initialState.people,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(fetchPepople.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPepople.fulfilled, (state, action) => {
          state.data = action.payload.data;
          state.loading = false;
            // state.data = action.payload.pageIndex
            //     ? state.data.concat(action.payload.data.items)
            //     : action.payload.data.items;
            // state.pageIndex = action.payload.pageIndex + 1;
            // // state.pageSize = action.payload.pageSize;
            // state.hasMore = !!action.payload.data.length && action.payload.itemsCount !== action.payload.data.length;
            // state.loading = false;
        });
        builder.addCase(fetchPepople.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default PeopleReducer.reducer;
