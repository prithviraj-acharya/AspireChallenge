import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import normalize from '../utils/helpers/dimen';
import {Colors, Fonts} from '../themes/Themes';

export default function SmallGreenBox(props) {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>S$</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    width: normalize(35),
    height: normalize(20),
    borderRadius: normalize(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontFamily: Fonts.avenirNextBold,
  },
});
