import React, {useState, useRef, useEffect} from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/dimen';
import {Colors, Fonts, Icons} from '../themes/Themes';

export default function CardComponent(props) {
  const [dataHidden, setDataHidden] = useState(false);
  const hiddenCardData = ['⚈⚈⚈⚈', '⚈⚈⚈⚈', '⚈⚈⚈⚈', props.cardNumber[3]];

  return (
    <View style={{width: '100%', height: normalize(250)}}>
      <TouchableOpacity
        onPress={() => setDataHidden(!dataHidden)}
        activeOpacity={0.9}
        style={styles.toHideOption}>
        <Image
          style={{
            height: normalize(15),
            width: normalize(15),
            marginBottom: normalize(6),
            marginHorizontal: normalize(5),
          }}
          source={dataHidden ? Icons.eyeOpen : Icons.eyeClose}
          resizeMode={'contain'}
        />
        <Text
          style={{
            marginBottom: normalize(6),
            color: Colors.green,
            fontFamily: Fonts.avenirNextDemiBold,
          }}>
          {dataHidden ? `Show card number` : `Hide card number`}
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          style={styles.appIcon}
          source={Icons.aspireLogo}
          resizeMode={'contain'}
        />
        <Image
          style={styles.visaIcon}
          source={Icons.visaLogo}
          resizeMode={'contain'}
        />

        <View style={styles.cardDetailContainer}>
          <Text style={styles.cardHoldername}>{props.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: normalize(20),
            }}>
            {dataHidden &&
              hiddenCardData.map((item, idx) => (
                <Text key={idx.toString()} style={[styles.cardNumber]}>
                  {item}
                </Text>
              ))}
            {!dataHidden &&
              props.cardNumber.map((item, idx) => (
                <Text key={idx.toString()} style={styles.cardNumber}>
                  {item}
                </Text>
              ))}
          </View>
          <View style={{flexDirection: 'row', marginTop: normalize(5)}}>
            <Text
              style={[
                styles.cardNumber,
                {fontSize: normalize(12), letterSpacing: normalize(0)},
              ]}>{`Thru: ${props.validThru}`}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={[
                  styles.cardNumber,
                  {
                    marginStart: normalize(10),
                    fontSize: normalize(12),
                    marginEnd: normalize(0),
                    letterSpacing: normalize(0),
                  },
                ]}>{`CVV: `}</Text>
              <Text
                style={[
                  styles.cardNumber,
                  {
                    fontSize: dataHidden ? normalize(9) : normalize(12),
                  },
                ]}>{`${dataHidden ? '★★★' : props.cvv}`}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

CardComponent.propTypes = {
  name: PropTypes.string,
  cardNumber: PropTypes.array,
  validThru: PropTypes.string,
  cvv: PropTypes.string,
};
CardComponent.defaultProps = {
  name: '',
  active: false,
  validThru: '',
  cvv: '',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: normalize(190),
    borderRadius: normalize(12.5),
    backgroundColor: Colors.green,
    position: 'absolute',
    top: normalize(30),
  },
  toHideOption: {
    width: '50%',
    alignSelf: 'flex-end',
    height: normalize(40),
    borderTopStartRadius: normalize(5),
    borderTopEndRadius: normalize(5),
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIcon: {
    height: normalize(50),
    width: normalize(60),
    position: 'absolute',
    right: normalize(15),
    top: Platform.OS === 'ios' ? normalize(2) : normalize(5),
  },
  visaIcon: {
    height: normalize(40),
    width: normalize(45),
    position: 'absolute',
    right: normalize(15),
    bottom: Platform.OS === 'ios' ? normalize(5) : normalize(5),
  },
  cardDetailContainer: {
    height: normalize(105),
    marginTop: normalize(55),
    marginStart: normalize(20),
  },
  cardHoldername: {
    color: Colors.white,
    fontFamily: Fonts.avenirNextBold,
    fontSize: normalize(18),
  },
  cardNumber: {
    color: Colors.white,
    fontFamily: Fonts.avenirNextDemiBold,
    fontSize: normalize(14),
    marginEnd: normalize(15),
    letterSpacing: normalize(2),
  },
});
