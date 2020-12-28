import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@material-ui/core';

import FlexContainer from 'src/components/FlexContainer';
import Header from 'src/components/Header';
import Configuration from 'src/pages/Configuration';
import Home from 'src/pages/Home';
import { persistor, store } from 'src/store';
import GlobalStyles from 'src/styles/GlobalStyles';
import { lightTheme } from 'src/styles/themes/lightTheme';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <FlexContainer>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/config" component={Configuration} />
          </Switch>
        </FlexContainer>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

export default App;
