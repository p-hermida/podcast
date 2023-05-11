import './podcastDetail.styles.css';

import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { get, getPodcastDetail } from "../../store/podcast";
import { RootState } from "../../store/reducer";

import { Link, Outlet, useParams } from 'react-router-dom';

const PodcastDetail = ({ get }) => {
  const { podcastId } = useParams<{ podcastId: string }>();

  const podcast = useSelector(
    (state: RootState) => getPodcastDetail(state)
  );

  useEffect(() => {
    get(podcastId);
  }, []);


  return <div className="container-detail">
    <Link to={`/podcast/${podcast?.id}`} className="podcast-data">
      <img src={podcast?.image} />
      <div className='title'>{podcast?.title}</div>
      <div className='author'>by {podcast?.author}</div>
    </Link>
    <div className="router-data">
      <Outlet />
    </div>
  </div>;
}

export const PodcastDetailPage = connect(null, { get })(PodcastDetail);
