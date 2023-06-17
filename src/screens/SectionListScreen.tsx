import React, { useContext } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import {  SectionList, Text, View } from 'react-native';
import { styles } from '../theme/apptheme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { casas } from '../data/Casas';
import ListItemSeparator from '../components/ListItemSeparator';
import ButtonExit from '../components/ButtonExit';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import { ThemeContext } from '../context/Theme/ThemeContext';

const SectionListScreen = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  const { theme: { colors, aditionalColors } } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>

      <SectionList
        stickySectionHeadersEnabled
        sections={casas}
        ListHeaderComponent={() => <HeaderTitle title="SectionListScreen" />}
        ListFooterComponent={() => (<ButtonExit goHome={() => navigate.navigate(StackScreens.HOME, {})} />)}
        renderSectionFooter={({ section }) => <HeaderTitle title={'Miembros de ' + section.casa + ': ' + section.data.length} />}
        renderItem={({ item }) => <Text style={[styles.text, {color: aditionalColors.subtitle} ]}>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        SectionSeparatorComponent={() => <ListItemSeparator borderWidth={3}/>}
        ItemSeparatorComponent={() => <ListItemSeparator borderWidth={1} />}
        renderSectionHeader={({ section }) => (
          <View
            style={{
              backgroundColor: colors.background,
            }}
          >
            <HeaderTitle title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};

export default SectionListScreen;
