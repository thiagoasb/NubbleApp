/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{fontFamily: 'Satoshi-BlackItalic'}}>
        Coffstack
      </Text>
      <Text preset="headingLarge">Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;
