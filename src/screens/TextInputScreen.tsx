import React, { useContext } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../theme/apptheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';
import ButtonExit from '../components/ButtonExit';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import { ThemeContext } from '../context/Theme/ThemeContext';

const TextInputScreen = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  const { form, isSubscribed, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const { theme : {aditionalColors}} = useContext(ThemeContext);
  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView >

        <View style={[globalStyles.globalMargin,{ flex: 1 }]}>
          <HeaderTitle title="Text Input" />
          <TextInput
            style={styles.input}
            placeholder="Aquí va el nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={(value) => onChange(value, 'name')}
          />
          <TextInput
            style={styles.input}
            placeholder="Aquí va el email"
            autoCapitalize="none"
            onChangeText={(value) => onChange(value, 'email')}
            keyboardType="email-address"
          />
          <Text style={ [globalStyles.code,{color: aditionalColors.code, backgroundColor: aditionalColors.backgroundCode}]}> {JSON.stringify(form, null, 3)} </Text>

          <TextInput
            style={styles.input}
            placeholder="Aquí va el telefono"
            onChangeText={(value) => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
          <View style={globalStyles.switchRow}>
            <Text style={[globalStyles.text,{color: aditionalColors.subtitle}]}>Suscribete! </Text>
            <CustomSwitch isOn={isSubscribed} onChange={(value) => onChange(value, 'isSubscribed')} />
          </View>

        </View>
        <View style={{ height: 100 }} />
      <ButtonExit goHome={() => navigate.navigate(StackScreens.HOME, {})} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,

  },
});
