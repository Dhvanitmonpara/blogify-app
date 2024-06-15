import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import postSlice from "./postSlice";

const store = configureStore({
    reducer: {
        authSlice,
        postSlice
    }
})

export default store