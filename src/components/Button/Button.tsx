import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPresets} from './buttonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline' | 'secondary';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];
  return (
    <TouchableOpacityBox
      // backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
