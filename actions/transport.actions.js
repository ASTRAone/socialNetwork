import { customAxios } from "../utility/customAxios";
import {createAsyncThunk} from '@reduxjs/toolkit';
import R from '../resources/R';

export const fetchTransport = createAsyncThunk('FetchTransport', async (_, {rejectWithValue}) => {
  console.log(R.url.transport)
  try {
      const response = await customAxios.get(R.url.transport);
      console.log('FetchTransport ', response);
      return {
        data: response.data.results,
      };
  } catch (error) {
      logTheEvent('Error', 'fetchTransport', error.response || error);
      return rejectWithValue(error.response.data);
  }
});

// export const fetchCardTechnologies = createAsyncThunk('FetchCardTechnologies', async (value, {rejectWithValue}) => {
//   console.log('FetchTechnologies ', R.url.people);
//   try {
//       const response = await customAxios.get(R.url.technologies + `?search=${value}`);
//       console.log(response);
//       return {
//         data: response.data.results,
//       };
//   } catch (error) {
//       console.log(error.response.data)
//   }
// });