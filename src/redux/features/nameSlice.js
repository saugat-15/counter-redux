import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: 'name',
    initialState : {
        name: 'Saugat',
    },
    reducers: {
        updateName: (state, action) => {
            // using action.payload for dynamic onChange name value
            state.name = action.payload
        }
    }
})

export const {updateName} = nameSlice.actions
export  default nameSlice.reducer;