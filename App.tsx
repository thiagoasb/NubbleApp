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
import {theme} from './src/theme/theme';
import {EyeOffIcon} from './src/assets/icons/EyeOffIcon';
import {EyeOnIcon} from './src/assets/icons/EyeOnIcon';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text bold preset="headingLarge" italic>
            Coffstack
          </Text>
          <EyeOffIcon color="blue" size={100} />
          <EyeOnIcon size={100} color="red" />
          <Icon name="eyeOn" color="carrotSecondary" size={50} />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
