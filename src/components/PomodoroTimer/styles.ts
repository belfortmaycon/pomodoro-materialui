import { makeStyles, Theme } from '@material-ui/core/styles';

import { IPomodoroTimerStyles } from './interfaces';

export const PomodoroTimerStyle = makeStyles<Theme, IPomodoroTimerStyles>(({ palette }: Theme) => ({
  title: (props) => ({
    textAlign: 'center',
    backgroundColor: props.isWorking ? palette.primary.main : palette.secondary.main,
    color: palette.common.white,
  }),
  content: {
    textAlign: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
