import React from 'react';
import { View } from 'react-native';

const ListItemSeparator = ({ borderWidth }: {borderWidth: number}) => {
  return (
    <View style={{
      borderBottomWidth: borderWidth,
      opacity: 0.4,
      marginVertical: 5,
    } } />
  );
};

export default ListItemSeparator;
