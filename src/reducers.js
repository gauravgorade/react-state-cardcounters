import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

export const cardCountReducer = createReducer(initialState, (builder) => {
    builder
        .addCase('increment', (state) => {
            state.count += 1;
        })
        .addCase('decrement', (state) => {
            state.count -= 1;
        })
        .addCase('incrementByValue', (state, action) => {
            state.count += action.payload;
        });
});
