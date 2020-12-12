import { IPomodoroState, PomodoroAction } from './types';

const INITIAL_STATE:IPomodoroState = {
  totalCycles: 0,
  totalOfPomodoros: 0,
  totalWorkingTime: 0,
};

export default function pomodoro(state = INITIAL_STATE, action: PomodoroAction): IPomodoroState {
  switch (action.type) {
    case '@pomodoro/SAVE_POMODORO_SUMMARY':
      return {
        ...state,
        totalCycles: action.payload.totalCycles,
        totalOfPomodoros: action.payload.totalOfPomodoros,
        totalWorkingTime: action.payload.totalWorkingTime,
      };
    default:
      return state;
  }
}
