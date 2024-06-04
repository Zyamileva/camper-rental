import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from './cars/cars-slice';
// import { boardsReducer } from './userBoard/userBoard-slice';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['accessToken', 'refreshToken', 'user'],
};

const persistCarsReducer = persistReducer(persistConfig, carsReducer);

const rootReducer = combineReducers({
  cars: persistCarsReducer,
  // user: userReducer,
  // boards: boardsReducer,
});

export default rootReducer;
