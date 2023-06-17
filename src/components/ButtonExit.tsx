import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/Theme/ThemeContext';

const ButtonExit = ({ goHome, disabled = false }: { goHome: () => void, disabled?: boolean }) => {
  const { theme: { aditionalColors} } = useContext(ThemeContext);
  return (
    <View style={ styles.containerButton}>
      <Pressable disabled={disabled } onPress={goHome} style={[styles.button, {backgroundColor: aditionalColors.pressable}]}>
        <Text style={{color: aditionalColors.text, fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>Go Home</Text>
      </Pressable>
    </View>
  );
};

export default ButtonExit;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 10,
    elevation: 10,
    borderRadius: 10,
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  containerButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
