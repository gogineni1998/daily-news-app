import { createSlice } from "@reduxjs/toolkit";
import { fetchPostById } from "../utils/thunks_postItem";
export const postItemSlice = createSlice({
    name: 'post_item',
    initialState: {
        post: {}
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.post = action.payload
            })
    }
}
)

export default postItemSlice.reducer