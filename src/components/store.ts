import { configureStore } from '@reduxjs/toolkit';
import tablesReducer from './tableSlice';

export const store = configureStore({
  reducer: {
    tables: tablesReducer,
  },
});