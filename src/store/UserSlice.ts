import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserState, LoginReqBody } from "../types";
import axios from "axios";
import { API } from "../config";

export const login = createAsyncThunk(
  "user/login",
  async (userCredentials: LoginReqBody) => {
    const req = axios.post(`${API}/auth/login`, userCredentials, {
      headers: { "Content-Type": "application/json" },
    });
    const res = await req;
    return res.data;
  }
);

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.user = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = null;
        state.loading = false;
        state.error = `${action.error.code} - ${action.error.message}`;
      });
  },
});

export default userSlice.reducer;
