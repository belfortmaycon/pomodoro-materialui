import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core';
import { PersistGate } from 'redux-persist/integration/react';

import FlexContainer from '~/components/FlexContainer';
import Header from '~/components/Header';
import Configuration from '~/pages/Configuration';
import Home from '~/pages/Home';
import { persistor, store } from '~/store';
import GlobalStyles from '~/styles/GlobalStyles';
import { lightTheme } from '~/styles/themes/lightTheme';

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
