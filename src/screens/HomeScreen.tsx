import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/apptheme';
import FlatListItem from '../components/FlatListItem';
import HeaderFlatList from '../components/HeaderFlatList';
import ListItemSeparator from '../components/ListItemSeparator';
import { MenuItem } from '../interfaces/Interfaces';

const menuItems : MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation101Screen',
  },
];

const HomeScreen = () => {


  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        ListHeaderComponent={()=> <HeaderFlatList title="Opciones de menú"/>}
        data={menuItems}
        renderItem={({ item }) => <FlatListItem menuItem={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={()=> <ListItemSeparator/>}
      />
    </View>
    );
};

export default HomeScreen;
