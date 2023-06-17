import React from 'react';
import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import HeaderTitle from '../components/HeaderTitle';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import ButtonExit from '../components/ButtonExit';

interface Props extends StackScreenProps<RootStackParams, StackScreens.ANIMATION_101> { }

const Animation101 = ({ navigation, route } : Props) => {

  const { fadeIn, fadeOut, position, opacity, startPosition } = useAnimation(undefined, 1000);
  const nombre = route.params?.nombre;

  return (
    <View style={styles.container}>
      <HeaderTitle title= "Animation 101"/>
      <Text>
        Animation 101 { nombre?.toUpperCase() }
      </Text>
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
        }} />
        <Button title="Fade Out" onPress={()=> fadeOut()} />
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
