import React, { useContext } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {  View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import { styles } from '../theme/apptheme';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { ThemeContext } from '../context/Theme/ThemeContext';
import ButtonExit from '../components/ButtonExit';

interface Props extends StackScreenProps<RootStackParams, StackScreens.THEME> { }

const Theme = ({ navigation }: Props) => {

  const { setDarkTheme, setLightTheme, theme: { currentTheme,  aditionalColors } } = useContext(ThemeContext);
  return (
    <View style={[styles.globalMargin, {justifyContent: 'center', alignItems: 'center', flex:1}]}>
      <HeaderTitle title={`Theme ${currentTheme.toUpperCase()}`} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          backgroundColor: aditionalColors.pressable,

          width: 150,
          height: 50,
          justifyContent: 'center',
          borderRadius: 10,
          alignItems: 'center',
          marginVertical: 10,
        }}
        onPress={() => {
          if (currentTheme === 'light') {
            setDarkTheme();
          } else if (currentTheme === 'dark') {
            setLightTheme();
          }
        }
        }
      >
        <Text
          style={{
            color: aditionalColors.text,
            fontWeight: 'bold',
            fontSize: 20,
          }}
        >Light / Dark</Text>
      </TouchableOpacity>
      <ButtonExit  goHome={() => navigation.navigate(StackScreens.HOME, {})} />
    </View>
  );
};

export default Theme;
