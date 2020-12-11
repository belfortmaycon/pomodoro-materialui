type TPomodoroSummary = {
  totalCycles: number,
  totalWorkingTime: number,
  totalOfPomodoros: number
}
export function savePomodoroSummary({
  totalCycles,
  totalWorkingTime,
  totalOfPomodoros,
} : TPomodoroSummary): {type: string, payload: TPomodoroSummary} {
  return {
    type: '@pomodoro/SAVE_POMODORO_SUMMARY',
    payload: {
      totalCycles,
      totalWorkingTime,
      totalOfPomodoros,
    },
  };
}
