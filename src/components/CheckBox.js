import React, {useState, useRef, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Animated} from 'react-native';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/dimen';
import {Colors} from '../themes/Themes';

export default function CheckBox(props) {
  const animValue = useRef(new Animated.Value(1)).current;
  const checked = () => {
    Animated.timing(animValue, {
      toValue: 23,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const unChecked = () => {
    Animated.timing(animValue, {
      toValue: 3,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (props.active == true) {
      checked();
    } else {
      unChecked();
    }
  }, [props.active]);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.onChange(!props.active);
      }}
      style={style.container}>
      <View
        style={[
          style.round,
          props.active == false
            ? {
                backgroundColor: Colors.grey,
                borderColor: Colors.grey,
                borderWidth: normalize(1),
              }
            : null,
        ]}>
        <Animated.View
          style={[
            style.innerRound,
            props.active == false
              ? {
                  backgroundColor: Colors.white,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,

                  elevation: 7,
                }
              : null,
            {transform: [{translateX: animValue}]},
          ]}></Animated.View>
      </View>
    </TouchableOpacity>
  );
}
CheckBox.propTypes = {
  onChange: PropTypes.func,
  active: PropTypes.bool,
};
CheckBox.defaultProps = {
  onChange: () => {},
  active: false,
};
const style = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  round: {
    height: normalize(19),
    width: normalize(35),
    backgroundColor: Colors.green,
    borderRadius: normalize(32),
    display: 'flex',
    justifyContent: 'center',
  },
  innerRound: {
    height: normalize(14),
    width: normalize(14),
    borderRadius: normalize(32),
    backgroundColor: Colors.white,
  },
});
