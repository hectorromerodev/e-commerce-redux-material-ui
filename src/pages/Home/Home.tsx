import React from 'react';

import { useCustomSelector } from '@/hooks/redux';

import { RootState } from '@/redux/store';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state: RootState) => state);

  console.log(auth);

  return <div>Home</div>;
};

export default Home;
