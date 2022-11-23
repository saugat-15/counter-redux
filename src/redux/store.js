import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import nameReducer from "./features/nameSlice";
export default configureStore({
    reducer:{
        counter: counterReducer,
        name: nameReducer
    }
})