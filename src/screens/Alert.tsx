import React from 'react';
import prompt from 'react-native-prompt-android';
import { Alert, Button, Pressable, Text, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/apptheme';
import { useNavigation } from '@react-navigation/native';

const AlertScreen = () => {
  const navigate = useNavigation();

  const showAlert = () => {
    Alert.alert(
      'Titulo de la alerta',
      'Mensaje dentro de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        {
          text : 'Otro boton',
          onPress : () => console.log('Otro boton presionado'),
        },
      ],
      {
        //Para tocar fuera de la alerta y cerrarla
        cancelable: true,
        onDismiss : () => console.log('Se ha cancelado la alerta'),
      }
    );
  };
  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
      }
  );
  };
  return (
    <View style={ styles.globalMargin}>
      <HeaderTitle title="Alertas" />
      <Button title="Alerta 1" onPress={showAlert} />
      <View style={{height: 10}}/>
      <Button title="Prompt Alert" onPress={showPrompt} />

      <Pressable onPress={()=> navigate.navigate('Home' as never)}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
  );
};

export default AlertScreen;
