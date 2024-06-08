export const selectCars = (state) => state.cars.items;

export const selectFiltersCars = (state) => state.cars.filter;

export const selectFavoriteCars = (state) => state.cars.favorites;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectError = (state) => state.cars.error;
