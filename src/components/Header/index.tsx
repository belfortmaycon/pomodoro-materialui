import React from 'react';

import {
  AppBar, Grid, Toolbar, Typography,
} from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';

import MenuItems from './MenuItens';
import { HeaderStyle } from './styles';

const Header: React.FC = () => {
  const classes = HeaderStyle();

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Grid container direction="row" spacing={3} justify="space-between">
          <Grid item className={classes.icon}>
            <AccessAlarm />
          </Grid>
          <Grid item className={classes.content}>
            <Typography variant="h6">Pomodoro App</Typography>
          </Grid>
          <Grid item>
            <MenuItems />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
