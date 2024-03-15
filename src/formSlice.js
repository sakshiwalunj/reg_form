// formSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    values: null,
  },
  reducers: {
    setFormValues: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { setFormValues } = formSlice.actions;

export const selectFormValues = (state) => state.form.values;

export default formSlice.reducer;
