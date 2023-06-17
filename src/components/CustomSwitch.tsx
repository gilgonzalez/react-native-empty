import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';
import { ThemeContext } from '../context/Theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (isEnabled: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

  const [isEnabled, setIsEnabled] = useState(isOn);
  const { theme: { aditionalColors} } = useContext(ThemeContext);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
        trackColor={{false: aditionalColors.inactiveSwitch, true: aditionalColors.activeSwitch}}
        thumbColor={isEnabled ? aditionalColors.activeSwitch : aditionalColors.inactiveButtonSwitch}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}

        value={isEnabled}
      />
  );
};
