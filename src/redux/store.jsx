

import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './appointmentSlice'; // Import your appointmentSlice here

const store = configureStore({
  reducer: {
    appointments: appointmentReducer, // Add your appointment slice to the store
  },
});

export default store;
