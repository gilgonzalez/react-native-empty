import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { Modal, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/apptheme';

export const CustomModal = () => {
  const navigate = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={{...styles.globalMargin, gap: 20} }>
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
              backgroundColor: 'white',
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
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>
              Este es el texto contenido de un modal, puede tener el tamaño que se necesite, y el modal ira agrandandose
            </Text>
            <Button title="Cerrar Modal" onPress={() => setIsVisible(false)}/>
          </View>
        </View>
        </Modal>
      <Button title="Mostrar Modal" onPress={() => setIsVisible(true)}/>

      <Button title="Atras!" onPress={() => navigate.goBack()}/>
    </View>
  );
};
