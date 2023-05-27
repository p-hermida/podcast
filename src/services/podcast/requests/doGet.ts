import { PodcastDetail } from "..";
import { axiosResponseToPodcastDetail } from "../adapters";
import { cachedData } from "../../utils";

export const doGet = (id: number): Promise<PodcastDetail> => {
  const urlData = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(urlData)}`;
  return cachedData<PodcastDetail>(
    `podcastDetail_${id}`,
    url,
    axiosResponseToPodcastDetail
  );
}

