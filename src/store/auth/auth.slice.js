import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    removeUser: (state) => {
      state.user = {};
      localStorage.removeItem('user');
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
