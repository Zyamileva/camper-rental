import { createAsyncThunk } from '@reduxjs/toolkit';
import {} from '../../api/cars-api/cars-api';
export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page = 1, { rejectWithValue }) => {
    try {
      const data = await fetchCars(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
