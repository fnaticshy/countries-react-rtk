import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
}

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setRegion: (state, { payload }) => {
      state.region = payload;
    },
    clearControls: () => initialState,
  }
})

export const {
  setSearch,
  setRegion,
  clearControls
} = controlsSlice.actions;

export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
