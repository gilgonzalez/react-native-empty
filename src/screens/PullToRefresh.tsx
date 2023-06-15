import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { Pressable, Text, View, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/apptheme';
import {  } from 'react-native-gesture-handler';

const PullToRefresh = () => {
  const navigate = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Se hizo la peticion');
    }, 4000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          //propiedad para situar el loader
          progressViewOffset={10}
          progressBackgroundColor="rgba (0,200,0,0.3)"
          colors={['white', 'tomato', 'green', 'orange']}
          title="Haciendo peticion"
          titleColor="black"
        />
      }
    >
    <View style={ styles.globalMargin}>
        <HeaderTitle title="PullToRefresh" />
        {data && <Text style={styles.title}>{data}</Text>}

      <Pressable onPress={()=> navigate.navigate('Home' as never)}>
        <Text>I'm pressable!</Text>
      </Pressable>
    </View>
    </ScrollView>
  );
};

export default PullToRefresh;
