import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

// import { Container } from './styles';
import { Timer } from '../Timer';
import FlexContainer from '../FlexContainer';

export default function PomodoroTimer(): JSX.Element {
  return (
    <FlexContainer test>
      <Card>
        <CardHeader title="Você está: Trabalhando" cl />
        <CardContent>
          <Timer mainTime={2000} />
        </CardContent>
      </Card>
    </FlexContainer>
  );
}
