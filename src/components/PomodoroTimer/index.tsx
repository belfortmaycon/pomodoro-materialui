import React, { useCallback, useEffect, useState } from 'react';

import {
  Button, Card, CardActions, CardContent, CardHeader, Grid,
} from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { useInterval } from 'hooks/use-interval';
import { secondsToTime } from 'utils/seconds-to-time';

import FlexContainer from '../FlexContainer';
import { Timer } from '../Timer';
import { IPomodoroTimerProps, IPomodoroTimerStyles } from './interfaces';
import { PomodoroTimerStyle } from './styles';

export default function PomodoroTimer(props: IPomodoroTimerProps): JSX.Element {
  const {
    pomodoroTime, shortRestTime, longRestTime, cycles,
  } = props;
  const [mainTime, setMainTime] = useState(pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(cycles - 1).fill(true),
  );
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

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTime);
    // audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    pomodoroTime,
  ]);

  const configureRest = useCallback(
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
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      longRestTime,
      shortRestTime,
    ],
  );

  useEffect(() => {
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    configureRest,
    setCyclesQtdManager,
    configureWork,
    cycles,
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
          <Button variant="contained" onClick={configureWork}>Work</Button>
          <Button variant="contained" onClick={() => configureRest(false)}>Rest</Button>
          <Button
            variant="contained"
            disabled={!working && !resting}
            onClick={() => setTimeCounting(!timeCounting)}
          >
            {
              timeCounting ? <Pause /> : <PlayArrow />
            }
          </Button>
        </CardActions>
      </Card>
    </FlexContainer>
  );
}
