import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';
import { styles } from '../theme/apptheme';
import ButtonExit from '../components/ButtonExit';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import { ThemeContext } from '../context/Theme/ThemeContext';

export const SwitchScreen = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();

  const [state, setState] = useState({
    isActive: true,
    isHappy: true,
    isHungry: false,
  });
  const { isActive, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const { theme: { aditionalColors} } = useContext(ThemeContext);
  return (
    <View style={{marginHorizontal:20, flex:1}}>
      <HeaderTitle title="Switch" />
      <View style={styles.switchRow}>
        <Text style={[styles.text,{color: aditionalColors.subtitle}]}>isActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value)=>onChange(value, 'isActive')}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={[styles.text,{color: aditionalColors.subtitle}]}>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value)=>onChange(value, 'isHappy')}/>
      </View>
      <View style={styles.switchRow}>
        <Text style={[styles.text,{color: aditionalColors.subtitle}]}>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value)=>onChange(value, 'isHungry')}/>
      </View>
      <Text style={[styles.code,{color: aditionalColors.code, backgroundColor: aditionalColors.backgroundCode}]}>
        { JSON.stringify(state, null, 3) }
      </Text>
      <ButtonExit goHome={() => navigate.navigate(StackScreens.HOME, {})}/>
    </View>
  );
};
