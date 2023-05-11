import axios, { AxiosResponse } from "axios";
import { PodcastDetail } from "..";
import { axiosResponseToPodcastDetail } from "../adapters";

export const doGet = (id: number): Promise<PodcastDetail> => {
  const urlData = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(urlData)}`;
  return axios.get(url).then((data: AxiosResponse) => 
    axiosResponseToPodcastDetail(data)
  );
}

