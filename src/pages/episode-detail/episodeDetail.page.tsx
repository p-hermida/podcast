import './episodeDetail.styles.css';

import { useSelector } from "react-redux";
import { getPodcastDetail } from "../../store/podcast";
import { RootState } from "../../store/reducer";
import { useParams } from "react-router-dom";

export const EpisodeDetail = () => {
  const podcast = useSelector(
    (state: RootState) => getPodcastDetail(state)
  );
  const { episodeId } = useParams<{ episodeId: string }>();

  const episode = podcast?.episodes.find((episode) => episode.id === Number(episodeId));
  
  return <div className="container-episode-detail">
    <h2>{episode?.title}</h2>
    <div className="episode-description">{episode?.description}</div>
    <div className="episode-audio">
      <audio id="myaudio" controls>
        <source src={episode?.audioUrl} type="audio/mpeg" />
      </audio>
    </div>
  </div>;
}
