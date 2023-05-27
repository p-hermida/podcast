import { AxiosResponse } from "axios";
import { Podcast, PodcastModel } from "../entities";

export const axiosResponseToPodcastList = (data: AxiosResponse): Podcast[] => {
  return data.data.feed.entry.map((podcast: PodcastModel) => {
    return {
      id: podcast.id.attributes['im:id'],
      image: podcast['im:image'][0].label,
      title: podcast['im:name'].label,
      author: podcast['im:artist'].label
    }
  });
};
