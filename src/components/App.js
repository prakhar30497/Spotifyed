import React, { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import { getAccessTokenFromUrl } from '../spotify';

import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: black;
  height: 100%;
  min-height: 100vh;
`;

const App = () => {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getAccessTokenFromUrl();
    window.location.hash = '';

    const accessToken = hash.access_token;

    if(accessToken) {
      setToken(hash);
    }
  }, []);

  return (
    <AppContainer>
      {token ? <Home /> : <Login />}
    </AppContainer>
  );
}

export default App;
