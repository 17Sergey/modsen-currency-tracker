import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// TODO: Add Tags
export const currencyAPI = createApi({
    reducerPath: "currencyAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        getGoods: build.query<unknown, { count: string }>({
            query: ({ count }) => `/posts${count && `?_limit=${count}`}`,
        }),
        addGood: build.mutation({
            query: (body) => ({
                method: "POST",
                url: "/posts",
                body,
            }),
        }),
    }),
});

export const { useGetGoodsQuery, useAddGoodMutation } = currencyAPI;
