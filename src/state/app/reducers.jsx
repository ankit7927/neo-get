import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const makeCall = createAsyncThunk("app/makeCall", async (payload, thunk)=>{
    const request = axios.create({
        baseURL: payload.url,
        method: payload.method,
    });

    return await request.apply();
})