import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ActivityIndicator, FlatList,  Text, View } from 'react-native';
import { styles as globalStyles } from '../theme/apptheme';
import FadeInImage from '../components/FadeInImage';
import ButtonExit from '../components/ButtonExit';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';

const InfinityScroll = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();

  const [numbers, setNumbers] = useState<number[]>([0,1, 2, 3, 4, 5]);
  //https://picsum.photos/id/237/200/300

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = ({ item }: {item:number}) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/1024/1024`} style={{
        width: '100%',
        height: 400,
      }} />
      // <Image
      //   source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
      //   style={{
      //     width: '100%',
      //     height: 400,
      //   }
      //   }
      // />
    );
  };
  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item + ''}
        renderItem={({ item }) => renderItem({ item })}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={ false}
        ListHeaderComponent={() => (
          <View style={globalStyles.globalMargin}>
            <HeaderTitle title="Infinito Scroll" />
            <ButtonExit goHome={() => navigate.navigate(StackScreens.HOME, {} )}/>
          </View>
          )}
        ListFooterComponent={() => (
          <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={25} color="grey" />
            <Text style={{ color: 'grey', textAlign: 'center', marginBottom: 50 }}>Cargando...</Text>
          </View>)
        }
      />

      <View style={{height: 100}}/>
    </View>
  );
};

export default InfinityScroll;
