import { configureStore } from "@reduxjs/toolkit";
import  postsReducer  from "./reducres/posts";
import usersReducer from "./reducres/users";
import postItemReducer from "./reducres/postItem"


export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
        postItem: postItemReducer
    }
})