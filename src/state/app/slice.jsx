import { makeCall } from "./reducers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  error: null,
  loading: false,
  response: null,
};

const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(makeCall.pending, (state)=>{
        state.error = null
        state.loading = true
        state.response = null
    })

    builder.addCase(makeCall.rejected, (state, payload)=> {
        state.error = payload.error;
        state.loading = false;
        state.response = null;
    })

    builder.addCase(makeCall.fulfilled, (state, payload)=>{
        state.error = null;
        state.loading = false;
        state.response = payload.payload.data;
    })
  },
});

export default appSlice.reducer;
