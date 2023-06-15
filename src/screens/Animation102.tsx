import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, PanResponder, Pressable, StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const Animation102 = () => {

  const navigate = useNavigation();

  const box = useRef(new Animated.ValueXY()).current;

  const boxResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: box.x,
        dy: box.y,
      },
    ], {
      useNativeDriver: false,
    }
    ),

    onPanResponderRelease: () => {
      Animated.spring(box, {
        toValue: { x: 0, y: 0 } ,
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
       <HeaderTitle title= "Animation 102"/>
      <Text>
        Animation 102
      </Text>
      <Animated.View
        {...boxResponder.panHandlers}
        style={[box.getLayout(), styles.box]}
      />
      <Pressable onPress={()=> navigate.goBack()}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  );
};

export default Animation102;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'green',
    width: 150,
    height: 150,
  },
});
