import { AnyAction } from 'redux';
import { createActions, createReducer, DefaultActionCreators } from 'reduxsauce';

export interface IPomodoroState {
  readonly totalCycles: number,
  readonly totalOfPomodoros: number,
  readonly totalWorkingTime: number,
}

type ActionTypes = {
  SAVE_POMODORO_SUMMARY: '@pomodoro/SAVE_POMODORO_SUMMARY'
}

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions<ActionTypes>({
  savePomodoroSummary: ['totalCycles', 'totalWorkingTime', 'totalOfPomodoros'],
}, { prefix: '@pomodoro' });

/**
 * Handlers
 */
const INITIAL_STATE:IPomodoroState = {
  totalCycles: 0,
  totalOfPomodoros: 0,
  totalWorkingTime: 0,
};
