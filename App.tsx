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
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box>
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>

          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button preset="outline" marginTop="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
