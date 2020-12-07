import React from 'react';

import { Card, CardContent, CardHeader } from '@material-ui/core';

import FlexContainer from '../FlexContainer';
import { Timer } from '../Timer';
import { IPomodoTimerStyles } from './interfaces';
import { PomodoroTimerStyle } from './styles';

export default function PomodoroTimer(): JSX.Element {
  const styledProps: IPomodoTimerStyles = { working: false };
  const classes = PomodoroTimerStyle(styledProps);
  return (
    <FlexContainer padding={8}>
      <Card>
        <CardHeader className={classes.title} title="Você está: Trabalhando" cl />
        <CardContent className={classes.content}>
          <Timer mainTime={2000} />
        </CardContent>
      </Card>
    </FlexContainer>
  );
}
