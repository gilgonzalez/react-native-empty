import { useNavigation } from '@react-navigation/native';
import React, { useRef} from 'react';
import { Animated, Button, Easing, Pressable, StyleSheet, Text, View } from 'react-native';

const Animation101 = () => {
  const navigate = useNavigation();

  const opacity = useRef(new Animated.Value(0)).current;
  const height = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(
      opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start();

    Animated.timing(
      height, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.bounce,
      }
    ).start();
  };
  const fadeOut = () => {
    Animated.timing(
      opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start(()=> height.setValue(-100));
  };
  return (
    <View style={styles.container}>
      <Text>
        Animation 101
      </Text>
      <Animated.View style={{
        ...styles.box,
        opacity,
        transform: [{
          translateY : height,
        }],
      }} />
      <View style={{flexDirection: 'row', gap: 20}}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
      <Pressable onPress={()=> navigate.goBack()}>
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
