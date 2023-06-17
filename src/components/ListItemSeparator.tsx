import React, { useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from '../context/Theme/ThemeContext';

const ListItemSeparator = ({ borderWidth }: { borderWidth: number }) => {
  const { theme: { dividerColor } } = useContext(ThemeContext);
  return (
    <View style={{
      borderBottomWidth: borderWidth,
      borderColor: dividerColor,
      marginVertical: 5,
    } } />
  );
};

export default ListItemSeparator;
