import { combineReducers } from 'redux';

import configuration from './config/reducer';
import pomodoro from './pomodoro/reducer';

import { StoreState } from '.';
/**
 * When the application has more reducers,
 * you import then here and pass for the combineReducers function
*/

export default combineReducers<StoreState>({
  // Passing only pomodoro is the same of pomodoro: pomodoro
  pomodoro,
  configuration,
});
