import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import HomeScreen from '../screens/HomeScreen';
import Animation101 from '../screens/Animation101';
import Animation102 from '../screens/Animation102';
import { SwitchScreen } from '../screens/Switch';
import AlertScreen from '../screens/Alert';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefresh from '../screens/PullToRefresh';
import SectionListScreen from '../screens/SectionListScreen';
import { CustomModal } from '../screens/CustomModal';
import InfinityScroll from '../screens/InfinityScroll';
import Slides from '../screens/Slides';
import Theme from '../screens/Theme';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/Theme/ThemeContext';

export const enum StackScreens {
  HOME = 'Home',
  ANIMATION_101 = 'Animation101',
  ANIMATION_102 = 'Animation102',
  SWITCH = 'Switch',
  ALERT = 'Alert',
  TEXT_INPUT = 'TextInput',
  PULL_TO_REFRESH = 'PullToRefresh',
  SECTION_LIST = 'SectionList',
  MODAL = 'Modal',
  INFINITY_SCROLL = 'InfinityScroll',
  SLIDES = 'Slides',
  THEME = 'Theme',
}

export type RootStackParams = {
  [StackScreens.HOME] : { }
  [StackScreens.ANIMATION_101] : { nombre : string }
  [StackScreens.ANIMATION_102] : { }
  [StackScreens.SWITCH]: {}
  [StackScreens.ALERT]: {}
  [StackScreens.TEXT_INPUT]: {}
  [StackScreens.PULL_TO_REFRESH]: {}
  [StackScreens.SECTION_LIST]: {}
  [StackScreens.MODAL]: {}
  [StackScreens.INFINITY_SCROLL]: {}
  [StackScreens.SLIDES]: {}
  [StackScreens.THEME]: {}
}

export type ScreenProps<T extends string> =
  T extends keyof RootStackParams
  ? StackScreenProps<RootStackParams, T>
  : never

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={ theme }
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor : theme.colors.background,
          },
        }}
      >
        <Stack.Screen name={StackScreens.HOME} component={HomeScreen} />
        <Stack.Screen name={StackScreens.ANIMATION_101} component={Animation101} />
        <Stack.Screen name={StackScreens.ANIMATION_102} component={Animation102} />
        <Stack.Screen name={StackScreens.SWITCH} component={SwitchScreen} />
        <Stack.Screen name={StackScreens.ALERT} component={AlertScreen} />
        <Stack.Screen name={StackScreens.TEXT_INPUT} component={TextInputScreen} />
        <Stack.Screen name={StackScreens.PULL_TO_REFRESH} component={PullToRefresh} />
        <Stack.Screen name={StackScreens.SECTION_LIST} component={SectionListScreen} />
        <Stack.Screen name={StackScreens.MODAL} component={CustomModal} />
        <Stack.Screen name={StackScreens.INFINITY_SCROLL} component={InfinityScroll} />
        <Stack.Screen name={StackScreens.SLIDES} component={Slides} />
        <Stack.Screen name={StackScreens.THEME} component={Theme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
