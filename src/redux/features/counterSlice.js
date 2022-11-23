import { createSlice } from "@reduxjs/toolkit";
// creating a slice for the counter state
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter : 0,
    },
    // reducers(functions),  export these as actions
    reducers: {
        increment:(state) => {
            state.counter += 1
        },
        decrement:(state) => {
            state.counter -= 1
        }
    }
}) 

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer;