import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  Fade,
  Paper,
  Snackbar,
  TextField,
} from '@material-ui/core';
import { Save } from '@material-ui/icons';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useFormik } from 'formik';
import * as yup from 'yup';

import FlexContainer from '~/components/FlexContainer';
import { RootState } from '~/store';
import { saveConfiguration } from '~/store/ducks/configuration';

import { ConfigurationStyle } from './styles';

const validationSchema = yup.object({
  pomodoroTime: yup
    .number()
    .positive()
    .integer()
    .required('Qual o tempo do Pomodoro?'),
  shortRestTime: yup
    .number()
    .positive()
    .integer()
    .required('Qual o tempo de Descanso Curto?'),
  longRestTime: yup
    .number()
    .positive()
    .integer()
    .required('Qual o tempo de Descanso Longo?'),
  cycles: yup
    .number()
    .positive()
    .integer()
    .required('Quantos Ciclos completados para ter um Descanso Longo?'),
});

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Configuration: React.FC = () => {
  const {
    pomodoroTime,
    shortRestTime,
    longRestTime,
    cycles,
  } = useSelector((state:RootState) => state.configuration);
  const dispatch = useDispatch();

  const [notificationAlert, setNofiticationAlert] = useState(false);

  const classes = ConfigurationStyle();

  const formik = useFormik({
    initialValues: {
      pomodoroTime,
      shortRestTime,
      longRestTime,
      cycles,
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(saveConfiguration({
        pomodoroTime: values.pomodoroTime,
        shortRestTime: values.shortRestTime,
        longRestTime: values.longRestTime,
        cycles: values.cycles,
      }));
      setNofiticationAlert(true);
    },
  });

  const handleNotificationClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setNofiticationAlert(false);
  };

  return (
    <FlexContainer padding={5}>
      <Paper className={classes.container}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.input}
            fullWidth
            key="input-pomodoroTime"
            variant="outlined"
            id="pomodoroTime"
            name="pomodoroTime"
            label="Tempo do Pomodoro (Min)"
            type="number"
            value={formik.values.pomodoroTime}
            onChange={formik.handleChange}
            error={formik.touched.pomodoroTime && Boolean(formik.errors.pomodoroTime)}
            helperText={formik.touched.pomodoroTime && formik.errors.pomodoroTime}
          />
          <TextField
            className={classes.input}
            fullWidth
            key="input-shortTime"
            variant="outlined"
            id="shortRestTime"
            name="shortRestTime"
            label="Tempo do Descanso Curto (Min)"
            type="number"
            value={formik.values.shortRestTime}
            onChange={formik.handleChange}
            error={formik.touched.shortRestTime && Boolean(formik.errors.shortRestTime)}
            helperText={formik.touched.shortRestTime && formik.errors.shortRestTime}
          />
          <TextField
            className={classes.input}
            fullWidth
            key="input-longTime"
            variant="outlined"
            id="longRestTime"
            name="longRestTime"
            label="Tempo do Descanso Longo (Min)"
            type="number"
            value={formik.values.longRestTime}
            onChange={formik.handleChange}
            error={formik.touched.longRestTime && Boolean(formik.errors.longRestTime)}
            helperText={formik.touched.longRestTime && formik.errors.longRestTime}
          />
          <TextField
            className={classes.input}
            fullWidth
            key="input-cycles"
            variant="outlined"
            id="cycles"
            name="cycles"
            label="Ciclos do Pomodoro"
            type="number"
            value={formik.values.cycles}
            onChange={formik.handleChange}
            error={formik.touched.cycles && Boolean(formik.errors.cycles)}
            helperText={formik.touched.cycles && formik.errors.cycles}
          />
          <Button
            className={classes.button}
            startIcon={
              <Save />
            }
            id="form-submit"
            type="submit"
          >
            Salvar
          </Button>
        </form>
      </Paper>
      <Snackbar
        open={notificationAlert}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={Fade}
      >
        <Alert onClose={handleNotificationClose} severity="success">
          Dados salvos com Sucesso!
        </Alert>
      </Snackbar>
    </FlexContainer>
  );
};

export default Configuration;
