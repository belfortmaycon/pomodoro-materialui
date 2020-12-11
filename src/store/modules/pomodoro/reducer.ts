import { IPomodoroState } from './types';

const INITIAL_STATE = {
  pomodoroSummary: {
    totalCycles: 0,
    totalWorkingTime: 0,
    totalOfPomodoros: 0,
  },
};

export function pomodoro(state = INITIAL_STATE, action: any): IPomodoroState {
  switch (action.type) {
    case '@pomodoro/SAVE_POMODORO_SUMMARY':
      return {
        ...state,
        pomodoroSummary: {
          totalCycles: 0,
          totalWorkingTime: 0,
          totalOfPomodoros: 0,
        },
      };
    default:
      return state;
  }
}
