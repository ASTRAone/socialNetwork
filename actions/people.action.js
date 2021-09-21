import { customAxios } from "../utility/customAxios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import R from '../resources/R';

export const fetchPepople = createAsyncThunk('people', async ({rejectWithValue}) => {
  try {
      const response = await customAxios.get(R.url.people);
      console.log(response);
      return {
          data: response.data,
          pageIndex,
          itemsCount: response.data.paging.itemsCount,
      };
  } catch (error) {
      logTheEvent('Error', 'fetchPageNews', error.response || error);
      return rejectWithValue(error.response.data);
  }
});
