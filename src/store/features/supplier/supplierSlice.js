// src/slices/supplierSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch supplier data
export const fetchSupplier = createAsyncThunk(
  "supplier/fetchSupplier",
  async (id) => {
    const response = await axios.get(`/api/suppliers/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data.data;
  }
);

// Async thunk to update competencies
export const updateCompetencies = createAsyncThunk(
  "supplier/updateCompetencies",
  async ({ id, competencies }) => {
    const response = await axios.put(
      `/api/suppliers/${id}`,
      { competencies },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data.data;
  }
);

const supplierSlice = createSlice({
  name: "supplier",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupplier.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSupplier.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSupplier.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCompetencies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCompetencies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateCompetencies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default supplierSlice.reducer;
