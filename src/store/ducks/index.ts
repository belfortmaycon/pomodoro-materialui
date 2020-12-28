import { combineReducers } from '@reduxjs/toolkit';

import configuration from './configuration';
import pomodoro from './pomodoro';
import todos from './todos';

export default combineReducers({
  pomodoro,
  configuration,
  todos,
});
