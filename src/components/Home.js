import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import history from '../utils/history';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '../configureStore';
import Discover from './Discover';
import Profile from './Profile';
import Dashboard from './Dashboard';

const initialState = {};
const store = configureStore(initialState, history);

const Home = () => {
    return (
    // <div style={{ color: 'white' }}>Hey</div>
        
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/discover" exact component={Discover}/>
              <Route path="/profile" exact component={Profile}/>
              <Route path='/' render={() => (<>404</>)} />
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </Provider>
    );
}

export default Home;