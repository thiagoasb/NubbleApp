import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function SignUpScreen() {
  function submitForm() {
    //TODO
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput placeholder="@" label="Seu username" boxProps={{mb: 's20'}} />
      <TextInput
        placeholder="Digite seu nome"
        label="Nome Completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        placeholder="DIgite seu e-mail"
        label="E-mail"
        boxProps={{mb: 's20'}}
      />
      <PasswordInput
        label="Senha"
        secureTextEntry
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />
      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
