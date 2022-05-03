import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCountryByName = createAsyncThunk(
  '@@details/load-country-by-name',
  (name, {extra: {client, api}}) => client(api.searchByCountry(name))
)

export const loadNeighborsByBorder = createAsyncThunk(
  '@@details/load-neighbors0by-border',
  (borders, {extra: {client, api}}) => {
    return client.get(api.filterByCode(borders));
  }
)

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

const detailSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState
  },
  extraReducers: (builder => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error; // action.payload - rejectWithValue in loadCountryByName
      })
      .addCase(loadCountryByName.fulfilled, (state, {payload}) => {
        state.status = 'idle';
        state.currentCountry = payload.data[0]
      })

      .addCase(loadNeighborsByBorder.fulfilled, (stata, action) => {
        stata.neighbors = action.payload.data.map(country => country.name);
      })

      // .addMatcher()
  })
});

export const { clearDetails } = detailSlice.actions;
export const detailReducer = detailSlice.reducer;

// selectors
export const selectCurrentCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
