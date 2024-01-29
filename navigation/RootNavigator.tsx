import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {AccordionScreen} from '../src/01-Accordion/AccordionScreen';
import {Home} from '../src/Home/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Accordion: undefined;
};

const RootNavigator = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Accordion"
        component={AccordionScreen}
        options={{
          title: 'Accordion',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
