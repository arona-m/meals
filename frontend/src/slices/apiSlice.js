import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({ baseUrl: '' });

// Creating an API slice
export const apiSlice = createApi({
  // Configuring the API
  baseQuery,
  //tag types to organize queries/ mutations
  tagTypes: ['User'],
  // defining endpoints using the builder function
  endpoints: (builder) => ({}),
});
