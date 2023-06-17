import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/apptheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/Theme/ThemeContext';

const HeaderTitle = ({ title }: { title: string }) => {
  const { top } = useSafeAreaInsets();
  const { theme: { aditionalColors } } = useContext(ThemeContext);

  return (
    <View style={{marginTop: top + 20}}>
        <Text style={ {...styles.title, color : aditionalColors.title}}>{title}</Text>
      </View>
  );
};

export default HeaderTitle;
