import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../theme/apptheme';
import { useNavigation } from '@react-navigation/native';

const SectionListScreen = () => {
  const navigate = useNavigation();

  return (
    <View style={ styles.globalMargin}>
      <HeaderTitle title="SectionListScreen" />
      <Pressable onPress={()=> navigate.navigate('Home' as never)}>
        <Text>I'm pressable!</Text>
      </Pressable>

    </View>
  );
};

export default SectionListScreen;
