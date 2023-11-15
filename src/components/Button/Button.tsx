import React from 'react';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
}

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<Theme>();

  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      // style={{
      //   paddingHorizontal: 20,
      //   paddingVertical: 14,
      //   backgroundColor: '#074C4E',
      //   alignItems: 'center',
      //   borderRadius: 16,
      // }}>
    >
      <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
        {title}
      </Text>
    </Box>
  );
}
