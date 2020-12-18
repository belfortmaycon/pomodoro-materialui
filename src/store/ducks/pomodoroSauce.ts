import { createActions, DefaultActionCreators } from 'reduxsauce';

export interface IPomodoroState {
  readonly totalCycles: number,
  readonly totalOfPomodoros: number,
  readonly totalWorkingTime: number,
}

export const enum ActionTypes {
  SAVE_POMODORO_SUMMARY = 'SAVE_POMODORO_SUMMARY'
}

interface C extends DefaultActionCreators {
  savePomodoroSummary: () => { type: ActionTypes.SAVE_POMODORO_SUMMARY};
}

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions<ActionTypes>({
  savePomodoroSummary: ['totalCycles', 'totalWorkingTime', 'totalOfPomodoros'],
}, { prefix: '@pomodoro' });

Creators.savePomodoroSummary();

/**
 * Handlers
 */
const INITIAL_STATE = {
  totalCycles: 0,
  totalOfPomodoros: 0,
  totalWorkingTime: 0,
};
