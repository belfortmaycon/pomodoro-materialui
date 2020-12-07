import { makeStyles, Theme } from '@material-ui/core/styles';

import { IFlexContainerStyles } from './interfaces';

export const flexContainerClass = makeStyles<Theme, IFlexContainerStyles>((theme: Theme) => ({
  root: (props) => ({
    padding: theme.spacing(props.padding),
  }),
}));
