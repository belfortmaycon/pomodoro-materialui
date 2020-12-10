import React from 'react';

import { ThemeProvider } from '@material-ui/core';
import Header from 'components/Header';

import FlexContainer from './components/FlexContainer';
import PomodoroTimer from './components/PomodoroTimer';
import GlobalStyles from './styles/GlobalStyles';
import { lightTheme } from './styles/themes/lightTheme';

const App: React.FC = () => (
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
);

export default App;
