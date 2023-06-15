import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/Interfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



const FlatListItem = ({ menuItem }: { menuItem: MenuItem }) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={'#007700' } size={20} />
        <Text style={styles.text}>{menuItem.name}</Text>
        <Icon style={styles.arrowIcon} name="chevron-forward-outline" size={20} color={'#007700' } />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
  arrowIcon: {
    position: 'absolute',
    right: 10,
  },
});
