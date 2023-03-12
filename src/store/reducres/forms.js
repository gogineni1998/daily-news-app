import { createSlice } from "@reduxjs/toolkit";

import { addContact } from "../utils/thunks_form";

export const formReducer = createSlice({
    name: 'form',
    initialState:{

    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(addContact.fulfilled, (state, action) =>{
            console.log(action.payload);
        })
    }
})

export default formReducer.reducer