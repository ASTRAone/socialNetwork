import { customAxios } from "../utility/customAxios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import R from '../resources/R';

export const fetchVariety = createAsyncThunk('fetchVariety', async (_, {rejectWithValue}) => {
  console.log(R.url.variety)
  try {
      const response = await customAxios.get(R.url.variety);
      console.log('fetchVariety ', response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      logTheEvent('Error', 'fetchVariety', error.response || error);
      return rejectWithValue(error.response.data);
  }
});

export const fetchCardVariety = createAsyncThunk('fetchCardVariety', async (value, {rejectWithValue}) => {
  console.log('fetchCardVariety ', R.url.variety);
  try {
      const response = await customAxios.get(R.url.variety + `?search=${value}`);
      console.log(response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      console.log(error.response.data)
  }
});