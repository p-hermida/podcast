import { createAsyncThunk } from '@reduxjs/toolkit';
import { Podcast, PodcastDetail, PodcastService } from '../../../services';

export const getAll = createAsyncThunk<
  Podcast[], 
  null,
  { rejectValue: Error }
>('podcast/list', async () => {
    const response = await PodcastService.getAll();
    return response;
});

export const get = createAsyncThunk<
  PodcastDetail, 
  number,
  { rejectValue: Error }
>('podcastDetail/detail', async (id: number) => {
    const response = await PodcastService.get(id);
    return response;
});
