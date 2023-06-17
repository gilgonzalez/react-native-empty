import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import ButtonExit from '../components/ButtonExit';

const Animation102 = () => {

  const navigate = useNavigation<NavigationProp<RootStackParams>>();

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
      <Animated.View
        {...boxResponder.panHandlers}
        style={[box.getLayout(), styles.box]}
      />
      <ButtonExit goHome={() => navigate.navigate(StackScreens.HOME, {})}/>
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
