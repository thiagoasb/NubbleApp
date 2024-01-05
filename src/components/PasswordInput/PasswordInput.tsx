import React, {useState} from 'react';
import {TextInput, TextInputProps, Icon} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecurityTextEntry] = useState(true);

  function toggleSecurityTextEntry() {
    setIsSecurityTextEntry(prev => !prev);
  }

  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecurityTextEntry}
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
