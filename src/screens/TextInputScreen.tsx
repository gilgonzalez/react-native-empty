import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { Pressable,  StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles as globalStyles } from '../theme/apptheme';
import { useForm } from '../hooks/useForm';
import { CustomSwitch } from '../components/CustomSwitch';

const TextInputScreen = () => {
  const navigate = useNavigation();
  const { form,isSubscribed,onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

      <View style={globalStyles.globalMargin}>
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
        <HeaderTitle title={JSON.stringify(form, null, 3)} />

        <TextInput
          style={styles.input}
          placeholder="Aquí va el telefono"
          onChangeText={(value) => onChange(value, 'phone')}
          keyboardType="phone-pad"
          />
      <View style={globalStyles.switchRow}>
            <Text>Suscribete! </Text>
        <CustomSwitch isOn={isSubscribed} onChange={(value)=>onChange(value, 'isSubscribed')}/>
      </View>

        <Pressable onPress={() => navigate.navigate('Home' as never)}>
          <Text>Go Back</Text>
        </Pressable>
        </View>
        <View style={ {height: 100}} />
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
