import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Animated, Button,  Pressable, StyleSheet, Text, View } from 'react-native';
import useAnimation from '../hooks/useAnimation';
import HeaderTitle from '../components/HeaderTitle';

const Animation101 = () => {
  const navigate = useNavigation();

  const {fadeIn, fadeOut, position, opacity, startPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <HeaderTitle title= "Animation 101"/>
      <Text>
        Animation 101
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
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
      <Pressable onPress={()=> navigate.navigate('Home' as never)}>
        <Text>I'm pressable!</Text>
      </Pressable>
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
