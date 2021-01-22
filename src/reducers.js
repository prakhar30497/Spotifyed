/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
// import globalReducer from 'containers/App/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(history, injectedReducers = {}) {
  const rootReducer = combineReducers({
    // global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
