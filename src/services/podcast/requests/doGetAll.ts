import { Podcast } from "..";
import { axiosResponseToPodcastList } from "../adapters";
import { cachedData } from "../../utils/cachedData.utils";

export const doGetAll = (): Promise<Podcast[]> =>
  cachedData<Podcast[]>(
    'podcastList',
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    axiosResponseToPodcastList
  );
