import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const SwitchScreen = () => {
  const navigate = useNavigation();

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
  return (
    <View style={{marginHorizontal:20}}>
      <HeaderTitle title="Switch" />
      <View style={styles.switchRow}>
        <Text>IsActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value)=>onChange(value, 'isActive')}/>
      </View>
      <View style={styles.switchRow}>
        <Text>isHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value)=>onChange(value, 'isHappy')}/>
      </View>
      <View style={styles.switchRow}>
        <Text>isHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value)=>onChange(value, 'isHungry')}/>
      </View>
      <Text style={styles.objectText}>
        { JSON.stringify(state, null, 3) }
      </Text>
      <Pressable onPress={()=> navigate.goBack()}>
        <Text>Go back!</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  objectText: {
    fontSize: 20,
  },
});
