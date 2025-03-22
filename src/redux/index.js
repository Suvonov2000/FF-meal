import { configureStore } from "@reduxjs/toolkit";
import buyurtmalarSlice from "./buyurtmalarSlice"

export default configureStore({
    reducer: {
        buyurtmalarSlice,

    },
})