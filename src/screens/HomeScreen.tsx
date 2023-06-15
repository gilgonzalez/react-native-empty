import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/apptheme';
import FlatListItem from '../components/FlatListItem';
import HeaderTitle from '../components/HeaderTitle';
import ListItemSeparator from '../components/ListItemSeparator';
import { menuItems } from '../data/MenuItems';


const HomeScreen = () => {


  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        ListHeaderComponent={()=> <HeaderTitle title="Opciones de menú"/>}
        data={menuItems}
        renderItem={({ item }) => <FlatListItem menuItem={ item } />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={()=> <ListItemSeparator/>}
      />
    </View>
    );
};

export default HomeScreen;
