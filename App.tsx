/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from '@shopify/restyle/dist/context';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {theme} from './src/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button title="Entrar" marginBottom="s12" />
          <Button loading title="Seconnd" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
