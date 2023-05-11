import { createAsyncThunk } from '@reduxjs/toolkit';
import { Podcast, PodcastService } from '../../../services';

export const getAll = createAsyncThunk<
  Podcast[], 
  null,
  { rejectValue: Error }
>('podcast/list', async () => {
    const response = await PodcastService.getAll();
    return response;
});
