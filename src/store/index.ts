import { configureStore } from "@reduxjs/toolkit";

import { currencyAPI } from "./api/currencyAPI.ts";
import { homePageReducer } from "./reducers/homePageReducer.ts";

export const store = configureStore({
    reducer: {
        homePage: homePageReducer,
        [currencyAPI.reducerPath]: currencyAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
