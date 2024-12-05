import { PayloadAction } from "@reduxjs/toolkit";

export const homePageActions = {
    increment: (state: HomePageState) => {
        state.value += 1;
    },
    decrement: (state: HomePageState) => {
        state.value -= 1;
    },
    incrementByAmount: (state: HomePageState, action: PayloadAction<number>) => {
        state.value += action.payload;
    },
};
