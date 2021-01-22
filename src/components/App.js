import React, { useState, useEffect } from 'react';
import Login from './Login';
import Home from './Home';
import { getAccessTokenFromUrl } from '../utils/spotify';
import history from '../utils/history';

import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: black;
  height: 100%;
  min-height: 100vh;
`;

const App = (props) => {

  const [token, setToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    const hash = getAccessTokenFromUrl();
    window.history.pushState("", document.title, window.location.pathname);

    const accessToken = hash.access_token;
    

    if(accessToken) {
      localStorage.setItem('accessToken', accessToken);
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
