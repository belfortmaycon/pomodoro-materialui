import React from 'react';

import {
  AppBar, Grid, IconButton, ThemeProvider, Toolbar, Typography,
} from '@material-ui/core';
import { AccessAlarm, Settings } from '@material-ui/icons';

import FlexContainer from './components/FlexContainer';
import PomodoroTimer from './components/PomodoroTimer';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme } from './styles/themes/lightTheme';

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <FlexContainer>
      <GlobalStyles />
      <AppBar position="relative">
        <Toolbar variant="dense">
          <Grid container direction="row" justify="space-between">
            <Grid item>
              <AccessAlarm />
            </Grid>
            <Grid item>
              <Typography variant="h6">Pomodoro App</Typography>
            </Grid>
            <Grid item>
              <IconButton edge="end">
                <Settings />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <PomodoroTimer />
    </FlexContainer>
  </ThemeProvider>
);

export default App;
