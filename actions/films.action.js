import { customAxios } from "../utility/customAxios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import R from '../resources/R';

export const fetchFilms = createAsyncThunk('fetchFilms', async (_, {rejectWithValue}) => {
  console.log(R.url.films)
  try {
      const response = await customAxios.get(R.url.films);
      console.log(response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      logTheEvent('Error', 'fetchFilms', error.response || error);
      return rejectWithValue(error.response.data);
  }
});
