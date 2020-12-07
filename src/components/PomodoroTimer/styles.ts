import { makeStyles, Theme } from '@material-ui/core/styles';

import { IPomodoTimerStyles } from './interfaces';

export const PomodoroTimerStyle = makeStyles<Theme, IPomodoTimerStyles>((theme: Theme) => ({
  title: (props) => ({
    textAlign: 'center',
    backgroundColor: props.working ? theme.palette.primary.main : theme.palette.secondary.main,
    color: theme.palette.text.hint,
  }),
  content: {
    textAlign: 'center',
  },
}));
