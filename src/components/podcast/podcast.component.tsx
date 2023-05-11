import './podcast.css';

import { Link } from 'react-router-dom';

import { PodcastParams } from './podcast.properties';

export const Podcast = ({ podcast }: PodcastParams) => {
  return <Link to={`/podcast/${podcast.id}`}>
    <div className='container-podcast'>
      <img src={podcast.image} />
      <div className='title'>{podcast.title}</div>
      <div className='author'>Author: {podcast.author}</div>
    </div>
  </Link>;
}
