import { combineReducers } from 'redux';

import pomodoro from './pomodoro/reducer';
/**
 * When the application has more reducers,
 * you import then here and pass for the combineReducers function
*/

export default combineReducers({
  // Passing only pomodoro is the same of pomodoro: pomodoro
  pomodoro,
});
