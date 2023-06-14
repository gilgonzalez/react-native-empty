import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/Interfaces';



const FlatListItem = ({ menuItem }: {menuItem : MenuItem}) => {
  return (
    <View>
        <Text><Icon name={ menuItem.icon} />{menuItem.name}</Text>
      </View>
  );
};

export default FlatListItem;
