import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteSlice"
import orderReducer from "./cartSlice"
const store = configureStore({
    reducer:{
        favorite:favoriteReducer,
        order:orderReducer
    }
})

export default store