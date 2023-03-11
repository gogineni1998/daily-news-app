import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const URL_SERV = "http://localhost:3001/posts";
export const fetchPostById = createAsyncThunk(
    'post_item/fetchPostById',
    async ({id = 0}) => {

        const response = await axios.get(`${URL_SERV}/${id}`)
        return response.data
    }
)