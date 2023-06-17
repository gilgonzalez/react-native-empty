import React, { useContext } from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import HeaderTitle from '../components/HeaderTitle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import ButtonExit from '../components/ButtonExit';
import { ThemeContext } from '../context/Theme/ThemeContext';

interface Props extends StackScreenProps<RootStackParams, StackScreens.ANIMATION_101> { }

const Animation101 = ({ navigation, route } : Props) => {

  const { fadeIn, fadeOut, position, opacity, startPosition } = useAnimation(undefined, 1000);
  const { theme: { aditionalColors} } = useContext(ThemeContext);
  const nombre = route.params?.nombre;

  return (
    <View style={styles.container}>
      <HeaderTitle title= {`Animation 101 ${nombre}`}/>

      <Animated.View style={{
        ...styles.box,
        opacity,
        transform: [{
          translateY : position,
        }],
      }} />
      <View style={{flexDirection: 'row', gap: 20}}>
        <Button title="Fade In" onPress={() => {
          fadeIn();
          startPosition();
        }}
          color={aditionalColors.pressable}
        />
        <Button title="Fade Out" onPress={()=> fadeOut()}  color={aditionalColors.pressable}/>
      </View>
      <ButtonExit goHome={() => navigation.navigate(StackScreens.HOME, {})  } />
    </View>
  );
};

export default Animation101;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'tomato',
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});
