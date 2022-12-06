import React from 'react';

import { useCustomSelector, useCustomDispatch } from '@/hooks/redux';
import { login } from '@/redux/slices/auth';

const Home: React.FC = () => {
  const {
    auth: { token, isLoading }
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleLogin = async (): Promise<void> => {
    dispatch(
      login({
        email: 'eve.holt@reqres.in',
        password: 'pistol'
      })
    );
  };

  return (
    <div>
      <h1>Home page works!</h1>
      <button onClick={handleLogin}>Login</button>
      <p>{isLoading ? 'Loading...' : token} </p>
    </div>
  );
};

export default Home;
