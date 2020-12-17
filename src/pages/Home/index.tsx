import React from 'react';
import { useSelector } from 'react-redux';

import PomodoroTimer from 'components/PomodoroTimer';
import { StoreState } from 'store/modules';
import { minutesToSecond } from 'utils/minutes-to-second';

const Home: React.FC = () => {
  const {
    pomodoroTime,
    shortRestTime,
    longRestTime,
    cycles,
  } = useSelector((store: StoreState) => store.configuration);
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
