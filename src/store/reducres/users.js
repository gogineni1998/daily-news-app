import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "../utils/thunks_users";
export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        result:''
    },
    reducers: {
        setToDefault: (state, action) => {
            state.result = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.fulfilled, (state, action) => {
                console.log(action);
                state.result = action.payload
            })
    }
})

export const { setToDefault } = usersSlice.actions

export default usersSlice.reducer