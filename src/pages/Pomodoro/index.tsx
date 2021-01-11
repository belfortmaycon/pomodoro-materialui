import React from 'react';
import { useSelector } from 'react-redux';

import PomodoroTimer from 'src/components/PomodoroTimer';
import { RootState } from 'src/store';
import { minutesToSecond } from 'src/utils/minutes-to-second';

const Pomodoro: React.FC = () => {
  const {
    pomodoroTime,
    shortRestTime,
    longRestTime,
    cycles,
  } = useSelector((store: RootState) => store.configuration);

  return (
    <>
      <PomodoroTimer
        pomodoroTime={minutesToSecond(pomodoroTime)}
        shortRestTime={minutesToSecond(shortRestTime)}
        longRestTime={minutesToSecond(longRestTime)}
        cycles={cycles}
      />
    </>
  );
};

export default Pomodoro;
