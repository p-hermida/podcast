import './header.css';

import { LineWave } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { isPendingList } from '../../store/podcast';

import { Title } from '..';

export const Header = () => {
  const listIsPending = useSelector(
    (state: RootState) => isPendingList(state)
  );
  
  return <div className='header'>
    <Title />
    <LineWave height='40' width='40' visible={listIsPending} />
  </div>;
}