import './home.styles.css';

import { useEffect } from "react";
import { connect, useSelector } from "react-redux";

import { getAll, getPodcastList } from "../../store/podcast";
import { RootState } from "../../store/reducer";
import { Podcast as PodcastEntity } from "../../services";
import { Podcast } from "../../components";

const Home = ({ getAll }) => {
  const list = useSelector(
    (state: RootState) => getPodcastList(state)
  );

  useEffect(() => {
    getAll();
  }, []);


  return <div className="container-list">
    {list.map(( podcast: PodcastEntity) => {
      return <Podcast podcast={podcast} />
    })}
  </div>;
}

export const HomePage = connect(null, { getAll })(Home);
