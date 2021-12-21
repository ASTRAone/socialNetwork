import { customAxios } from "../utility/customAxios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import R from '../resources/R';

export const fetchPeople = createAsyncThunk('FetchPeople', async (_, {rejectWithValue}) => {
  console.log(R.url.people)
  try {
      const response = await customAxios.get(R.url.people);
      console.log(response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      logTheEvent('Error', 'fetchPageNews', error.response || error);
      return rejectWithValue(error.response.data);
  }
});

export const fetchCardPeople = createAsyncThunk('FetchCardPeople', async (value, {rejectWithValue}) => {
  console.log(R.url.people);
  console.log(value)
  try {
      const response = await customAxios.get(R.url.people + `?search=${value}`);
      console.log(response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      console.log(error.response.data)
  }
});