import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';  
import { apiSlice } from './slices/apiSlice'; 

// Config Redux store
const store = configureStore({
  reducer: {
    // Adding apiSlice- 'api' key
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Adding the authReducer- 'auth' key
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), 
  devTools: true,
});

export default store;
