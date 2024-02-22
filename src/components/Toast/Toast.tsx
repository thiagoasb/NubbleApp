import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {Toast as ToastType, useToast, useToastService} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;
const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const position: Required<ToastType>['position'] = toast?.position || 'top';
  const {hideToast} = useToastService();

  useEffect(() => {
    setTimeout(() => {
      hideToast();
    }, toast?.duration || DEFAULT_DURATION);
  }, [hideToast, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon color="success" name="checkRound" />
      <Text style={{flexShrink: 1}} ml="s16" preset="paragraphMedium" bold>
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  backgroundColor: 'background',
  alignSelf: 'center',
  alignItems: 'center',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
};
