import { createSlice } from '@reduxjs/toolkit';

//  initial state for retrieving user info from local storage if available
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // set user credentials state/local storage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // logging out// removing user info from the state and local storage
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
