import { createSlice } from '@reduxjs/toolkit';
import { pending, rejected } from '../../shared/redux/redux';
import { fetchCars, fetchAllCars } from './cars-operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: {},
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.filter.location = action.payload;
    },
    setEquipment(state, action) {
      state.filter.equipment = action.payload;
    },
    setType(state, action) {
      state.filter.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, pending)
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const newItems = action.payload.map((item) => ({
          ...item,
        }));
        state.items = [...state.items, ...newItems];
      })
      .addCase(fetchCars.rejected, rejected)
      .addCase(fetchAllCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        console.log(state);

        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
export const { setLocation, setEquipment, setType } = carsSlice.actions;
