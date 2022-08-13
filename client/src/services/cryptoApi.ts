import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_RAPIDAPI_KEY,
  // "X-RapidAPI-Key": process.env.VITE_APP_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_APP_CRYPTO_RAPIDAPI_HOST,
  // "X-RapidAPI-Host": process.env.VITE_APP_CRYPTO_RAPIDAPI_HOST,
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_CRYPTO_API_URL as string,
  }), // process.env.VITE_APP_CRYPTO_API_URL
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;