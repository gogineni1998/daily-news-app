import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const URL_SERV = "http://localhost:3001";

export const addUser = createAsyncThunk(
    'posts/addUser',
    async ({ data = 'none' }, { getState }) => {
        const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data}`)
        if(findUser.data.length === 0 || findUser.data[0].email !== data) {
            await axios({
                method: 'POST',
                url: `${URL_SERV}/newsletter`,
                data: {
                    email: data
                }
            })
            data = "yes"
        }
        else {
            data = "No"
        }
        return data
    }
)