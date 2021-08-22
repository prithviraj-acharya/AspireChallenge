import React, {useState, useRef, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/dimen';
import {Colors, Fonts, Icons} from '../themes/Themes';
import CheckBox from './CheckBox';

export default function AccountOptionComponent(props) {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <View
      style={{
        width: '98%',
        height: normalize(50),
        marginVertical: normalize(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: props.checkboxReq ? 'space-between' : 'flex-start',
        alignSelf: 'center',
      }}>
      <Image
        source={props.icon}
        style={{width: normalize(35), height: normalize(35)}}
      />
      <View
        style={{
          width: '70%',
          marginHorizontal: normalize(8),
        }}>
        <Text style={{fontFamily: Fonts.avenirNextMedium}}>{props.title}</Text>
        <Text
          style={{fontFamily: Fonts.avenirNextRegular, color: Colors.textGrey}}>
          {props.desc}
        </Text>
      </View>
      {props.checkboxReq && (
        <CheckBox active={checkbox} onChange={() => setCheckbox(!checkbox)} />
      )}
    </View>
  );
}

AccountOptionComponent.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  checkboxReq: PropTypes.bool,
  desc: PropTypes.string,
};
AccountOptionComponent.defaultProps = {
  icon: '',
  title: '',
  checkboxReq: false,
  desc: '',
};

const styles = StyleSheet.create({});
