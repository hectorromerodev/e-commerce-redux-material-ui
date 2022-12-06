import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

const Home: React.FC = () => {
  const { auth } = useSelector((state: RootState) => state);

  console.log(auth);

  return <div>Home</div>;
};

export default Home;
