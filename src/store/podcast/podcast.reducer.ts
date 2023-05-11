import { createSlice } from '@reduxjs/toolkit';
import { PodcastListState } from './states';
import { getAll } from './actions';

const initialState: PodcastListState = {
  list: [],
  isPending: false,
  error: null,
};

const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.list = [];
        state.isPending = true;
        state.error = null;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isPending = false;
        state.error = null;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.list = [];
        state.isPending = false;
        state.error = (action.payload as Error).message;
      });
  },
});

export default podcastSlice.reducer;
