/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
