import { createAsyncThunk } from '@reduxjs/toolkit';
import { Podcast, PodcastDetail, PodcastService } from '../../../services';

export const getAll = createAsyncThunk<
  Podcast[], 
  string,
  { rejectValue: Error }
>('podcast/list', async (filter: string) => {
    const response = await PodcastService.getAll();
    const regex = new RegExp(filter, 'i');
    const filteredResponse = response.filter((podcast: Podcast) =>
      regex.test(podcast.title) || regex.test(podcast.author)
    );
    return filteredResponse;
});

export const get = createAsyncThunk<
  PodcastDetail, 
  number,
  { rejectValue: Error }
>('podcastDetail/detail', async (id: number) => {
    const response = await PodcastService.get(id);
    return response;
});
