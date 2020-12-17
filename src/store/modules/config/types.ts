import { ActionType } from 'typesafe-actions';

import * as actions from './actions';

export type ConfigurationAction = ActionType<typeof actions>;

export interface IConfigurationState {
  readonly pomodoroTime: number,
  readonly shortRestTime: number,
  readonly longRestTime: number,
  readonly cycles: number,
}
