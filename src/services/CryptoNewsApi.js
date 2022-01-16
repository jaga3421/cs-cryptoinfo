import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const headers = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '5T2OuJM0OfmshbqIMJfFIUJJwqbFp1q2D4wjsnC2VXFapIWnLW'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = url => ({ url, headers})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => createRequest('/news')
        })
    })
});

export const {
    useGetNewsQuery,
} = cryptoNewsApi;