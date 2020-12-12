import {
  applyMiddleware, createStore, Middleware, Reducer, Store,
} from 'redux';

import { IPomodoroState, PomodoroAction } from './modules/pomodoro/types';

export interface StoreState {
  pomodoro: IPomodoroState;
}

// to include more action do PomodoroAction | XXX
export type StoreAction = PomodoroAction;

export default (
  reducers: Reducer<StoreState, StoreAction>,
  middlewares: Middleware[],
): Store<StoreState, StoreAction> => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
