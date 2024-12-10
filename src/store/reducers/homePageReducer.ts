import { REDUX_SLICES } from "@constants/constants";
import { createSlice } from "@reduxjs/toolkit";
import { homePageActions } from "@store/actions/homePageActions";

const initialState: HomePageState = {
    value: 0,
};

export const homePageSlice = createSlice({
    name: REDUX_SLICES.HOME_PAGE,
    initialState,
    reducers: homePageActions,
});

export const { increment, decrement, incrementByAmount } = homePageSlice.actions;

export const homePageReducer = homePageSlice.reducer;

// TODO: Add Selectors
