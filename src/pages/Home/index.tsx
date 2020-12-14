import React from 'react';

import PomodoroTimer from 'components/PomodoroTimer';

const Home: React.FC = () => (
  <>
    <PomodoroTimer
      pomodoroTime={8}
      shortRestTime={10}
      longRestTime={20}
      cycles={4}
    />
  </>
);

export default Home;
