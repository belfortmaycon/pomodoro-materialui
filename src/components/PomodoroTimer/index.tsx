import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button, Card, CardActions, CardContent, CardHeader, Grid,
} from '@material-ui/core';
import {
  Pause, PlayArrow, Save, Stop,
} from '@material-ui/icons';

import FlexContainer from '~/components/FlexContainer';
import { Timer } from '~/components/Timer';
import { useInterval } from '~/hooks/use-interval';
import { RootState } from '~/store';
import { savePomodoroSummary } from '~/store/ducks/pomodoro';
import { secondsToTime } from '~/utils/seconds-to-time';

import { IPomodoroTimerProps, IPomodoroTimerStyles } from './interfaces';
import { PomodoroTimerStyle } from './styles';

export default function PomodoroTimer(props: IPomodoroTimerProps): JSX.Element {
  const {
    pomodoroTime, shortRestTime, longRestTime, cycles,
  } = props;
  // Redux
  const {
    totalCycles,
    totalOfPomodoros,
    totalWorkingTime,
  } = useSelector((state:RootState) => state.pomodoro);

  const dispatch = useDispatch();

  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(cycles - 1).fill(true),
  );
  const [stopped, setStopped] = useState(false);
  // Candidates to be global -> Redux
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  const styledProps: IPomodoroTimerStyles = { isWorking: working };
  const classes = PomodoroTimerStyle(styledProps);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const startWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTime);
    setStopped(false);
    // audioStartWorking.play();
  }, [
    pomodoroTime,
  ]);

  const startRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(longRestTime);
      } else {
        setMainTime(shortRestTime);
      }

      // audioStopWorking.play();
    },
    [
      longRestTime,
      shortRestTime,
    ],
  );
  /* If we use the Callback function here, it will be called
     every time one of the states change.
  */
  // const canSave = useCallback(() => {
  //   // https://pt.stackoverflow.com/questions/29014/qual-o-sentido-de-usar-dupla-nega%C3%A7%C3%A3o-em-javascript
  //   const can = !!(((!working && !resting && !timeCounting)
  //   && (fullWorkingTime > 0)));

  //   console.log('Can Save Pomodoro?', can);

  //   return can;
  // }, [fullWorkingTime, resting, timeCounting, working]);

  const stopWorkingAndRestart = useCallback(() => {
    setStopped(true);

    setTimeCounting(false);
    setWorking(false);
    setResting(false);
    setMainTime(pomodoroTime);
  }, [pomodoroTime]);

  const handleSaveOnClick = useCallback(() => {
    dispatch(savePomodoroSummary({
      totalCycles: totalCycles + completedCycles,
      totalOfPomodoros: totalOfPomodoros + numberOfPomodoros,
      totalWorkingTime: totalWorkingTime + fullWorkingTime,
    }));
  }, [completedCycles,
    dispatch,
    fullWorkingTime,
    numberOfPomodoros,
    totalCycles,
    totalOfPomodoros,
    totalWorkingTime]);

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      startRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      startRest(true);
      setCyclesQtdManager(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) startWork();
  }, [completedCycles,
    cycles,
    cyclesQtdManager,
    mainTime,
    numberOfPomodoros,
    resting,
    startRest,
    startWork,
    working,
  ]);

  return (
    <FlexContainer padding={8}>
      <Card>
        <CardHeader
          className={classes.title}
          title={working ? 'Você está: Trabalhando' : 'Você está: Descansando'}
        />
        <CardContent>
          <Grid container justify="space-around" spacing={3}>
            <Grid item>
              <Grid container justify="center" spacing={3}>
                <Timer mainTime={mainTime} />
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={3} direction="column" justify="flex-end">
                <Grid item>
                  <Card elevation={2}>
                    <CardHeader title="Ciclos" />
                    <CardContent>{completedCycles}</CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card elevation={2}>
                    <CardHeader title="Horas Totais" />
                    <CardContent>{secondsToTime(fullWorkingTime)}</CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card elevation={2}>
                    <CardHeader title="Pomodoros" />
                    <CardContent>{numberOfPomodoros}</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.buttons}>
          <Button variant="contained" onClick={startWork}>Work</Button>
          <Button variant="contained" onClick={() => startRest(false)}>Rest</Button>
          <Button
            variant="contained"
            disabled={!working && !resting}
            onClick={() => setTimeCounting(!timeCounting)}
          >
            {
              timeCounting ? <Pause /> : <PlayArrow />
            }
          </Button>
          <Button
            onClick={stopWorkingAndRestart}
          >
            <Stop />
          </Button>
          <Button
            startIcon={
              <Save />
            }
            disabled={!stopped}
            onClick={handleSaveOnClick}
          >
            Save
          </Button>
        </CardActions>
      </Card>
    </FlexContainer>
  );
}
