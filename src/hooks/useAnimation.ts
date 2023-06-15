import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimation = (duration: number = 300) => {


  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(
      opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }
    ).start();
  };
  const fadeOut = () => {
    Animated.timing(
      opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }
    ).start(() => position.setValue(-100));
  };

  const startPosition = (initPosition: number = -100, animationDuration: number = 1000,) => {
    position.setValue(initPosition);

    Animated.timing(
      position, {
      toValue: 0,
      duration: animationDuration,
      easing: Easing.bounce,
      useNativeDriver: true,
    }
    ).start();
  };


  return {
    fadeIn,
    fadeOut,
    startPosition,
    opacity,
    position,
  };
};

export default useAnimation;
