import { configureStore } from "@reduxjs/toolkit";
import { cardCountReducer } from './reducers';

const store = configureStore({

    reducer: {
        cardcount: cardCountReducer,
    },
});

export default store;