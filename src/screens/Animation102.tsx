import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Animation102 = () => {

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Text>
        Animation 102
      </Text>
      <View style={styles.box} />
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
