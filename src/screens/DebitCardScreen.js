import React, {useState, useEffect, Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import {Colors, Fonts, Images} from '../themes/Themes';
import normalize from '../utils/helpers/dimen';
import CheckBox from '../components/CheckBox';
import SmallGreenBox from '../components/SmallGreenBox';
import CardComponent from '../components/CardComponent';

export default function DebitCardScreen(props) {
  const [checkbox, setCheckBox] = useState(false);
  return (
    <Fragment>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.themeColor}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={styles.container}>
          <Image
            style={styles.appIcon}
            source={Images.appIcon}
            resizeMode={'contain'}
          />
          <View style={styles.debitCardheader}>
            <Text style={styles.debitCardheaderText}>Debit Card</Text>
            <Text style={styles.availTextStyle}>Available balance</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: normalize(10),
                alignItems: 'center',
              }}>
              <SmallGreenBox />
              <Text
                style={[
                  styles.debitCardheaderText,
                  {marginHorizontal: normalize(10)},
                ]}>
                3,000
              </Text>
            </View>
          </View>
          <View style={styles.bottomViewContainer}>
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                position: 'absolute',
                top: normalize(-100),
              }}>
              <CardComponent
                name={'Mark Henry'}
                cardNumber={['5647', '1234', '9998', '2312']}
                validThru={'11/25'}
                cvv={'678'}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.themeColor,
  },
  appIcon: {
    height: normalize(40),
    width: normalize(40),
    position: 'absolute',
    right: normalize(10),
    top: Platform.OS === 'ios' ? normalize(2) : normalize(5),
  },
  debitCardheader: {
    marginTop: normalize(30),
    marginStart: normalize(20),
  },
  debitCardheaderText: {
    color: Colors.white,
    fontFamily: Fonts.avenirNextBold,
    fontSize: normalize(20),
  },
  availTextStyle: {
    color: Colors.white,
    fontFamily: Fonts.avenirNextMedium,
    fontSize: normalize(12),
    marginTop: normalize(25),
  },

  bottomViewContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
    marginTop: normalize(100),
    borderTopStartRadius: normalize(30),
    borderTopEndRadius: normalize(30),
  },
});
