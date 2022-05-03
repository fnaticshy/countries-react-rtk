import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  region: '',
}

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: {
      reducer: (state, { payload }) => {
        state.search = payload;
      },
      // prepare: (text) => {
      //   const id = nanoid()
      //   return { payload: { id, text } }
      // }
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
