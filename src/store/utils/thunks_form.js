import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const URL_SERV = "http://localhost:3001";

export const addContact = createAsyncThunk(
    'form/addContact',
    async ({ email, name, lastname, message }) => {
        await axios({
            method: 'POST',
            url: `${URL_SERV}/contact`,
            data: {
                email: email,
                firstname: name,
                lastname: lastname,
                message: message
            }
        })
        return {
            status: "success"
        }
    }
)