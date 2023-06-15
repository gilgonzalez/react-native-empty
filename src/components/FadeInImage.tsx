import React, { useState } from 'react';
import useAnimation from '../hooks/useAnimation';
import { Animated, View, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>
 }

const FadeInImage = ({ uri, style } :Props) => {

  const { fadeIn, opacity } = useAnimation(2000);
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    fadeIn();
    setIsLoading(false);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {
        isLoading && <ActivityIndicator
          color={'#5856D6'}
          size={30} style={{
          position: 'absolute',
        }} />
      }
      <Animated.Image
        source={{ uri }}
        onLoad={finishLoading}
        style={
          {
            ...style as any,
            opacity,
          }
        }
      />
    </View>

  );
};

export default FadeInImage;
