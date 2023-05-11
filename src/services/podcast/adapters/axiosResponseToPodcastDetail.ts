import { AxiosResponse } from "axios";
import { PodcastDetail } from "..";

export const axiosResponseToPodcastDetail = (data: AxiosResponse): PodcastDetail => {
  const { results } = JSON.parse(data.data.contents);
  console.log(results);
  return {
    id: results[0].collectionId,
    image: results[0].artworkUrl600,
    title: results[0].collectionCensoredName,
    author: results[0].artistName,
    episodes: results
      .filter((episode: any) => episode.kind === 'podcast-episode')
      .map((episode: any) => {
        return {
          id: episode.trackId,
          title: episode.trackName,
          date: dateFormat(episode.releaseDate),
          duration: millisToDurationFormat(episode.trackTimeMillis),
          description: episode.description,
          audioUrl: episode.episodeUrl,
        }
    })
  };
};

const millisToDurationFormat = (millis: string) => {
  const date = new Date(millis);
  return date.getUTCMinutes() + ':' + date.getUTCSeconds();
}

const dateFormat = (date: string) => {
  const dateOnDate = new Date(date);
  return dateOnDate.toLocaleDateString();
}
