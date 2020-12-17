export interface IPomodoroTimerProps {
  /**
   * Pomodoro Time in Seconds
   */
  pomodoroTime: number;
  /**
   * Short Rest Time in Seconds after one Pomodoro
   */
  shortRestTime: number;
  /**
   * Long Rest Time in Seconds after a cycle of Pomodoros
   */
  longRestTime: number;
  /**
   * Number of cycles to start a Long Rest Time
   */
  cycles: number;
}

export interface IPomodoroTimerStyles {
  /**
   * Indicate if the time of working is running
   */
  isWorking: boolean
}
