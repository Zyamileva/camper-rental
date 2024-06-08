import { createAsyncThunk } from '@reduxjs/toolkit';
import * as carsApi from '../../api/cars-api/cars-api';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (page = 1, { rejectWithValue }) => {
    try {
      const data = await carsApi.fetchCars(page);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchAllCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, thunkAPI) => {
    try {
      const res = carsApi.fetchAllCars();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
