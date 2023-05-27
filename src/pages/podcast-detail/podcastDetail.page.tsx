import './podcastDetail.styles.css';

import { useCallback, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";

import { get, getPodcastDetail, isPendingDetail } from "../../store/podcast";
import { RootState } from "../../store/reducer";

import { Link, Outlet, useParams } from 'react-router-dom';

const PodcastDetail = ({ get }: any) => {
  const { podcastId } = useParams<{ podcastId: string }>();

  const podcast = useSelector(
    (state: RootState) => getPodcastDetail(state)
  );
  const detailIsPending = useSelector(
    (state: RootState) => isPendingDetail(state)
  );

  const request = useCallback(() => get(podcastId), [get, podcastId]);

  useEffect(() => {
    request();
  }, [request]);

  return (
    <div className="container-detail">
      {detailIsPending ? (
        <Skeleton height={200} width={200} />
      ) : (
        <>
          <Link to={`/podcast/${podcast?.id}`} className="podcast-data">
            <img src={podcast?.image} alt={podcast?.title} loading="lazy" />
            <div className='title'>{podcast?.title}</div>
            <div className='author'>by {podcast?.author}</div>
          </Link>
          <div className="router-data">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

export const PodcastDetailPage = connect(null, { get })(PodcastDetail);