import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {Theme} from '../../theme/theme';
import {Box} from '../Box/Box';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <Box
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      // style={{
      //   paddingHorizontal: 20,
      //   paddingVertical: 14,
      //   backgroundColor: '#074C4E',
      //   alignItems: 'center',
      //   borderRadius: 16,
      // }}>
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
          {title}
        </Text>
      )}
    </Box>
  );
}
