import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/Interfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/Theme/ThemeContext';



const FlatListItem = ({ menuItem }: { menuItem: MenuItem }) => {

  const navigation = useNavigation();
  const { theme: { aditionalColors} } = useContext(ThemeContext);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(menuItem.component as never)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={ aditionalColors.icon} size={20} />
        <Text style={[styles.text, { color: aditionalColors.subtitle }]}>{menuItem.name}</Text>
        <Icon style={styles.arrowIcon} name="chevron-forward-outline" size={20} color={aditionalColors.icon } />
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
