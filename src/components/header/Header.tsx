import './header.css';

import { Title } from '..';
import { useState } from 'react';
import { LineWave } from 'react-loader-spinner';

export const Header = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  return <div className='header'>
    <Title />
    <LineWave height='40' width='40' visible={isLoading} />
  </div>;
}