import React from 'react';
import {Screen} from '../../components/Screen/Screen';
import {Icon} from '../../components/Icon/Icon';
import {Text} from '../../components/Text/Text';
import {Button} from '../../components/Button/Button';
import {RootStackParamList} from '../../Routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route}: ScreenProps) {
  function goBackToBegin() {
    // TODO Navegar para a tela de login
  }
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}
