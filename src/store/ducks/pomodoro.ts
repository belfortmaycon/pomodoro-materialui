import { createAction } from 'typesafe-actions';

type ActionTypes = {
  SAVE_POMODORO_SUMMARY: '@pomodoro/SAVE_POMODORO_SUMMARY'
}

interface TPomodoroSummary {
  totalCycles: number,
  totalWorkingTime: number,
  totalOfPomodoros: number
};

const actions = {
  savePomodoroSummary: createAction('@pomodoro/SAVE_POMODORO_SUMMARY', (state, action) => true),
};
