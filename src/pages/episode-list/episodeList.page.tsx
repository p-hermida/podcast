import './episodeList.styles.css';

import { useSelector } from "react-redux";

import { getPodcastDetail } from "../../store/podcast";
import { RootState } from "../../store/reducer";
import { Episode } from '../../services/podcast/entities';
import { Link } from 'react-router-dom';


export const EpisodeList = () => {

  const podcast = useSelector(
    (state: RootState) => getPodcastDetail(state)
  );

  return <div className='container-episode-list'>
    <div className='header-episodes'>
      <div className='header-title'>Episodes: {podcast?.episodes.length}</div>
    </div>
    <table>
      <thead>
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
      </thead>
      <tbody>
        {podcast?.episodes.map((episode: Episode, index: number) => {
          return <tr key={index}>
            <td><Link to={`episode/${episode.id}`}>{episode.title}</Link></td>
            <td>{episode.date}</td>
            <td>{episode.duration}</td>
          </tr>
        })}
      </tbody>
    </table>
  </div>;
}
