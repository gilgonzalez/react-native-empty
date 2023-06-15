import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import Animation101 from '../screens/Animation101';
import Animation102 from '../screens/Animation102';
import { SwitchScreen } from '../screens/Switch';
import AlertScreen from '../screens/Alert';
import TextInputScreen from '../screens/TextInputScreen';
import PullToRefresh from '../screens/PullToRefresh';
import SectionListScreen from '../screens/SectionListScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101} />
      <Stack.Screen name="Animation102" component={Animation102} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen name="TextInput" component={TextInputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="SectionList" component={SectionListScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
