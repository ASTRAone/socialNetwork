import { customAxios } from "../utility/customAxios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import R from '../resources/R';

export const fetchTechnologies = createAsyncThunk('FetchTechnologies', async (_, {rejectWithValue}) => {
  console.log(R.url.people)
  try {
      const response = await customAxios.get(R.url.technologies);
      console.log('FetchTechnologies ', response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      logTheEvent('Error', 'fetchPageNews', error.response || error);
      return rejectWithValue(error.response.data);
  }
});

export const fetchCardTechnologies = createAsyncThunk('FetchCardTechnologies', async (value, {rejectWithValue}) => {
  console.log('FetchTechnologies ', R.url.people);
  try {
      const response = await customAxios.get(R.url.technologies + `?search=${value}`);
      console.log(response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      console.log(error.response.data)
  }
});