import { AxiosResponse } from "axios";
import { Podcast } from "..";

export const axiosResponseToPodcastList = (data: AxiosResponse): Podcast[] => {
  return data.data.feed.entry.map((podcast: any) => {
    return {
      id: podcast.id.attributes['im:id'],
      image: podcast['im:image'][0].label,
      title: podcast['im:name'].label,
      author: podcast['im:artist'].label
    }
  });
};
