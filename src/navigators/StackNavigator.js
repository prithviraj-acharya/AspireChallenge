import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DebitCardScreen from '../screens/DebitCardScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name={'DebitCardScreen'} component={DebitCardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
