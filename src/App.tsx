import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@material-ui/core';
import Header from 'components/Header';
import { PersistGate } from 'redux-persist/integration/react';

import FlexContainer from './components/FlexContainer';
import PomodoroTimer from './components/PomodoroTimer';
import { persistor, store } from './store';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme } from './styles/themes/lightTheme';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={lightTheme}>
        <FlexContainer>
          <GlobalStyles />
          <Header />
          <PomodoroTimer
            pomodoroTime={8}
            shortRestTime={10}
            longRestTime={20}
            cycles={4}
          />
        </FlexContainer>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
