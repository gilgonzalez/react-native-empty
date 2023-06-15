import React, { useState } from 'react';
import { Switch } from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
        trackColor={{false: '#D9d9db', true: '#00DD00'}}
        thumbColor={isEnabled ? 'green' : '#D9d9db'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}

        value={isEnabled}
      />
  );
};
