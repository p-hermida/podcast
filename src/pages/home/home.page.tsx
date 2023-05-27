import './home.styles.css';

import { useCallback, useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";

import { getAll, getPodcastList } from "../../store/podcast";
import { RootState } from "../../store/reducer";
import { Podcast as PodcastEntity } from "../../services";
import { Filter, Podcast } from "../../components";

const Home = ({ getAll }: any) => {
  const [filter, setFilter] = useState('');
  const list = useSelector(
    (state: RootState) => getPodcastList(state)
  );

  const request = useCallback(() => getAll(filter), [getAll, filter]);

  useEffect(() => {
    request();
  }, [request]);

  return <div id="home-content">
    <Filter total={list.length} filter={filter} setFilter={setFilter}/>
    <div className="container-list">
    {list.map(( podcast: PodcastEntity, index: number ) => {
      return <Podcast podcast={podcast} key={index} />
    })}
    </div>
  </div>;
}

export const HomePage = connect(null, { getAll })(Home);
