import { makeStyles, Theme } from '@material-ui/core/styles';

import { IHeaderStyles } from './interfaces';

export const HeaderStyle = makeStyles<Theme, IHeaderStyles>(({ palette }: Theme) => ({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '8px',
  },
  icon: {
    marginTop: '10px',
  },
}));
