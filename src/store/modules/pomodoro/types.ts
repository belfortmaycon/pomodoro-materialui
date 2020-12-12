import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type PomodoroAction = ActionType<typeof actions>;

export interface IPomodoroState {
  readonly totalCycles: number,
  readonly totalOfPomodoros: number,
  readonly totalWorkingTime: number,
}
