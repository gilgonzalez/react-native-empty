import React, { useContext, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { Modal, Text, View } from 'react-native';
import { Button } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles } from '../theme/apptheme';
import ButtonExit from '../components/ButtonExit';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import { ThemeContext } from '../context/Theme/ThemeContext';

export const CustomModal = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  const [isVisible, setIsVisible] = useState(false);
  const { theme: {aditionalColors } } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, gap: 20, flex:1} }>
      <HeaderTitle title="Modal Screen" />
      <Modal
        animationType="fade"
        visible={isVisible}
        transparent={true}
      >
        {/**BACKGROUND MODAL */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: aditionalColors.backgroundModal,
              width: '80%',
              borderRadius: 10,
              padding: 20,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
              gap: 20,
            }}
          >
            <HeaderTitle title="Modal Titulo" />
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: aditionalColors.subtitle }}>
              Este es el texto contenido de un modal, puede tener el tamaño que se necesite, y el modal ira agrandandose
            </Text>
            <Button title="Cerrar Modal" onPress={() => setIsVisible(false)}  color={aditionalColors.pressable}/>
          </View>
        </View>
        </Modal>
      <Button title="Mostrar Modal" onPress={() => setIsVisible(true)}  color={aditionalColors.pressable}/>

      <ButtonExit goHome={() => navigate.navigate(StackScreens.HOME, {} )}/>
    </View>
  );
};
