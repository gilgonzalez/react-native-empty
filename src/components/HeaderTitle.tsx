import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/apptheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HeaderTitle = ({ title }: { title: string }) => {
  const { top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 10}}>
        <Text style={ styles.title}>{title}</Text>
      </View>
  );
};

export default HeaderTitle;
