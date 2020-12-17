import { action } from 'typesafe-actions';

type TConfiguration = {
  pomodoroTime: number,
  shortRestTime: number,
  longRestTime: number,
  cycles: number,
}

export function saveConfiguration({
  pomodoroTime,
  shortRestTime,
  longRestTime,
  cycles,
}: TConfiguration): { type: string, payload: TConfiguration} {
  return action('@config/SAVE_CONFIGURATION', {
    pomodoroTime,
    shortRestTime,
    longRestTime,
    cycles,
  });
}
