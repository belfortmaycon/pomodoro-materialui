import { createReducer } from 'typesafe-actions';

import { ConfigurationAction, IConfigurationState } from './types';

const INITIAL_STATE:IConfigurationState = {
  pomodoroTime: 25,
  shortRestTime: 5,
  longRestTime: 25,
  cycles: 4,
};

export default function configuration(
  state = INITIAL_STATE, action: ConfigurationAction,
): IConfigurationState {
  switch (action.type) {
    case '@config/SAVE_CONFIGURATION':
      return {
        ...state,
        pomodoroTime: action.payload.pomodoroTime,
        shortRestTime: action.payload.shortRestTime,
        longRestTime: action.payload.longRestTime,
        cycles: action.payload.cycles,
      };

    default:
      return state;
  }
}

// export default createReducer<IConfigurationState, ConfigurationAction>(
//   INITIAL_STATE, {
//     SAVE_CONFIGURATION: (state, action) => ({ ...state, action.payload }),
//   },
// );
