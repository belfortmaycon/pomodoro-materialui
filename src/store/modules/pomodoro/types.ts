export interface IPomodoroState {
  readonly pomodoroSummary: {
    readonly totalCycles: number,
    readonly totalWorkingTime: number,
    readonly totalOfPomodoros: number,
  }
}
