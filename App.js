import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import StackNavigator from './src/navigators/StackNavigator';
import {useDispatch, useSelector} from 'react-redux';

export default function App() {
  return <StackNavigator />;
}
