
import { createSlice } from '@reduxjs/toolkit';

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
