import { configureStore } from "@reduxjs/toolkit"
import CheckReducer  from "../Redux/Reducer"

export const store = configureStore({
    reducer:{
        // name:reducer
        user:CheckReducer 
    }
})