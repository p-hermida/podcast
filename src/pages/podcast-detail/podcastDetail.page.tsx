import './podcastDetail.styles.css';

import { useCallback, useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { get, getPodcastDetail } from "../../store/podcast";
import { RootState } from "../../store/reducer";

import { Link, Outlet, useParams } from 'react-router-dom';

const PodcastDetail = ({ get }: any) => {
  const { podcastId } = useParams<{ podcastId: string }>();

  const podcast = useSelector(
    (state: RootState) => getPodcastDetail(state)
  );

  const request = useCallback(() => get(podcastId), [get, podcastId]);

  useEffect(() => {
    request();
  }, [request]);

  return <div className="container-detail">
    <Link to={`/podcast/${podcast?.id}`} className="podcast-data">
      <img src={podcast?.image} alt={podcast?.title} loading="lazy" />
      <div className='title'>{podcast?.title}</div>
      <div className='author'>by {podcast?.author}</div>
    </Link>
    <div className="router-data">
      <Outlet />
    </div>
  </div>;
}

export const PodcastDetailPage = connect(null, { get })(PodcastDetail);
