import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { Pressable, SectionList, Text, View } from 'react-native';
import { styles } from '../theme/apptheme';
import { useNavigation } from '@react-navigation/native';
import { casas } from '../data/Casas';
import ListItemSeparator from '../components/ListItemSeparator';

const SectionListScreen = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.globalMargin}>

      <SectionList
        stickySectionHeadersEnabled
        sections={casas}
        ListHeaderComponent={() => <HeaderTitle title="SectionListScreen" />}
        ListFooterComponent={() => (
          <View style={{height:100, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'red', fontSize:20}}>Section List Footer</Text>
          </View>
        )}
        renderSectionFooter={({ section }) => <HeaderTitle title={'Miembros de ' + section.casa + ': ' + section.data.length} />}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        SectionSeparatorComponent={() => <ListItemSeparator borderWidth={3}/>}
        ItemSeparatorComponent={() => <ListItemSeparator borderWidth={1} />}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: 'white' }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
      <Pressable onPress={() => navigate.navigate('Home' as never)}>
        <Text>Going Back Bro!</Text>
      </Pressable>

    </View>
  );
};

export default SectionListScreen;
