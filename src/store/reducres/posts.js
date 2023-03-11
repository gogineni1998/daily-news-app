import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../utils/thunks_posts";

export const postsSlice = createSlice({
    name: 'posts',
    initialState:{
        loading: true,
        articles:{
            items:[]
        }
    },
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.articles = action.payload 
        })
        .addCase(fetchPosts.rejected, (state) => {
            state.loading = true
            state.articles = {items:[], end:0}
        })
    }
})

export default postsSlice.reducer