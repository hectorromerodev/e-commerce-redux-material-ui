import React from 'react';

import { useCustomSelector, useCustomDispatch } from '@/hooks/redux';
import { setToken } from '@/redux/slices/auth';

const Home: React.FC = () => {
  const { auth } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleLogin = (): void => {
    dispatch(setToken('Token-klaljsd78-8duas9das8'));
  };

  return (
    <div>
      <h1>Home page works!</h1>
      <button onClick={handleLogin}>Login</button>
      <p>{auth.token}</p>
    </div>
  );
};

export default Home;
