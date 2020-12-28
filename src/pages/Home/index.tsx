import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import PomodoroTimer from 'src/components/PomodoroTimer';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { RootState } from 'src/store';
import { fetchAllTodos } from 'src/store/ducks/todos';
import { minutesToSecond } from 'src/utils/minutes-to-second';

const Home: React.FC = () => {
  const {
    pomodoroTime,
    shortRestTime,
    longRestTime,
    cycles,
  } = useSelector((store: RootState) => store.configuration);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      const todosReturn = await dispatch(fetchAllTodos());

      if (fetchAllTodos.fulfilled.match(todosReturn)) {
        // const todos = todosReturn.payload;
        // todos[1].id;
      }
    }
    fetchData();
  }, [dispatch]);

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
