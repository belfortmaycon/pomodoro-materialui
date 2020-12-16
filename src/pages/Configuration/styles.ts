import { makeStyles, Theme } from '@material-ui/core/styles';

export interface IConfigurationStyles {}

export const ConfigurationStyle = makeStyles<Theme, IConfigurationStyles>(({ palette }: Theme) => ({
  container: {
    padding: '10px',
  },
  input: {
    marginTop: 30,
  },
  button: {
    marginTop: 30,
  },
}));
