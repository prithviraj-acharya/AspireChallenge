import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DebitCardScreen from '../screens/DebitCardScreen';
import SpendingLimitScren from '../screens/SpendingLimitScren';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerMode: false}}>
        <Stack.Screen name={'DebitCardScreen'} component={DebitCardScreen} />
        <Stack.Screen
          name={'SpendingLimitScren'}
          component={SpendingLimitScren}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
