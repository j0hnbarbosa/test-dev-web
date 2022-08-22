import { createSlice } from '@reduxjs/toolkit';
import { api } from '../services/client';

export const authAction = createSlice({
  name: 'auth',
  initialState: {
    token: null
  },
  reducers: {
    sign_in: (state, action) => {
      localStorage.setItem("TOKEN", action.payload);
      state.token = action.payload;
      api.defaults.headers['Authorization'] = `Bearer ${action.payload}`;
    },
    sign_out: (state, action) => {
      localStorage.setItem("TOKEN", null);
      localStorage.removeItem("TOKEN");
      api.defaults.headers['Authorization'] = '';
    },
  }
});


// Action creators are generated for each case reducer function
export const { sign_in, sign_out } = authAction.actions;

export default authAction.reducer;
