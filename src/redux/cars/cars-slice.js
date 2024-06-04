import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import { fetchCars } from './cars-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, pending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const newItems = action.payload.map((item) => ({
          ...item,
        }));
        state.cars.items = [...state.items, ...newItems];
      })
      .addCase(fetchCars.rejected, rejected);
  },
});

export default carsSlice.reducer;
