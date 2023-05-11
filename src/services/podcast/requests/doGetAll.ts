import axios, { AxiosResponse } from "axios";
import { Podcast } from "..";
import { axiosResponseToPodcastList } from "../adapters";

export const doGetAll = (): Promise<Podcast[]> =>
  axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json').then((data: AxiosResponse) => 
    axiosResponseToPodcastList(data)
  );
