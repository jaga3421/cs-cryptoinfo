import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '5T2OuJM0OfmshbqIMJfFIUJJwqbFp1q2D4wjsnC2VXFapIWnLW'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({ url, headers})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;