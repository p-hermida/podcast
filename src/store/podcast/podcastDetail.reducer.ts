import { createSlice } from '@reduxjs/toolkit';
import { PodcastDetailState } from './states';
import { get } from './actions';

const initialState: PodcastDetailState = {
  detail: null,
  isPending: false,
  error: null,
};

const podcastDetailSlice = createSlice({
  name: 'podcastDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get.pending, (state) => {
        state.detail = null;
        state.isPending = true;
        state.error = null;
      })
      .addCase(get.fulfilled, (state, action) => {
        console.log(action);
        state.detail = action.payload;
        state.isPending = false;
        state.error = null;
      })
      .addCase(get.rejected, (state) => {
        state.detail = null;
        state.isPending = false;
        state.error = 'Error';
      });
  },
});

export default podcastDetailSlice.reducer;
