import React from 'react';
import { useSelector } from 'react-redux';

import PomodoroTimer from '~/components/PomodoroTimer';
import { RootState } from '~/store';
import { minutesToSecond } from '~/utils/minutes-to-second';

const Home: React.FC = () => {
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

export default Home;
