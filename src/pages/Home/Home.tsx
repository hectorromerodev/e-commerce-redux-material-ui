import React from 'react';

import { useCustomSelector } from '@/hooks/redux';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);

  console.log(auth);

  return <div>Home</div>;
};

export default Home;
