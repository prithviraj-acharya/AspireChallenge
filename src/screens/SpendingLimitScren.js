import React, {useState, useEffect, Fragment} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import {Colors, Fonts, Icons, Images} from '../themes/Themes';
import normalize from '../utils/helpers/dimen';
import SmallGreenBox from '../components/SmallGreenBox';
import {useNavigation} from '@react-navigation/native';
import MaskInput, {createNumberMask} from 'react-native-mask-input';
import Button from '../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import showErrorAlert from '../utils/helpers/Toast';
import {setUserSpendingLimit} from '../redux/action/AuthAction';
import {SET_USER_SPENDING_LIMIT_REQUEST} from '../redux/store/TypeConstants';
import status from '../utils/helpers/status';

export default function SpendingLimitScren(props) {
  const naviagation = useNavigation();
  const [money, setMoney] = useState('');
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);

  status(
    AuthReducer.status,
    SET_USER_SPENDING_LIMIT_REQUEST,
    () => {
      showErrorAlert('Limit saved successfully!');
    },
    () => {
      showErrorAlert('Something went wrong!');
    },
  );

  return (
    <Fragment>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.themeColor}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => naviagation.goBack()}>
              <Image
                style={styles.backIcon}
                source={Icons.backIcon}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            <Image
              style={styles.appIcon}
              source={Images.appIcon}
              resizeMode={'contain'}
            />
          </View>

          <Text style={styles.debitCardheaderText}>Spending limit</Text>
          <View style={styles.bottomViewContainer}>
            <View
              style={{
                flexDirection: 'row',
                margin: normalize(20),
                alignItems: 'center',
              }}>
              <Image
                style={styles.setWeeklyIcon}
                source={Icons.setWeeklyLimit}
                resizeMode={'contain'}
              />
              <Text
                style={{
                  marginHorizontal: normalize(10),
                  fontFamily: Fonts.avenirNextMedium,
                  fontSize: normalize(12),
                }}>
                Set a weekly debit card spending limit
              </Text>
            </View>
            <View
              style={{
                width: '88%',
                flexDirection: 'row',
                marginStart: normalize(20),
                alignItems: 'center',
                borderColor: Colors.white,
                borderBottomColor: Colors.grey,
                borderWidth: 1,
                paddingVertical: normalize(12),
              }}>
              <SmallGreenBox />
              <MaskInput
                value={money}
                style={{
                  marginHorizontal: normalize(15),
                  fontFamily: Fonts.avenirNextBold,
                  fontSize: normalize(17),
                }}
                placeholder={'Enter your limit'}
                onChangeText={(masked, unmasked, obfuscated) => {
                  setMoney(masked); // you can use the unmasked value as well
                }}
                mask={createNumberMask({
                  prefix: [],
                  delimiter: ',',
                  separator: '.',
                  precision: 2,
                })}
              />
            </View>
            <Text
              style={{
                marginHorizontal: normalize(20),
                marginVertical: normalize(20),
                fontFamily: Fonts.avenirNextRegular,
                fontSize: normalize(12),
                color: Colors.textGrey,
              }}>
              Here weekly means the last 7 days - not the calendar week
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '95%',
                alignSelf: 'center',
              }}>
              {['S$ 5,000.00', 'S$ 10,000.00', 'S$ 20,000.00'].map(
                (item, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => setMoney(item.split(' ')[1])}
                    style={{
                      width: '28%',
                      height: normalize(40),
                      backgroundColor: Colors.lightGreen,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.green,
                        fontFamily: Fonts.avenirNextDemiBold,
                      }}>
                      {item.split('.')[0]}
                    </Text>
                  </TouchableOpacity>
                ),
              )}
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginBottom: normalize(10)}}>
          <Button
            disabled={money.length > 3 ? false : true}
            width={'65%'}
            height={normalize(45)}
            borderRadius={normalize(25)}
            title={'Save'}
            onPress={() => {
              dispatch(
                setUserSpendingLimit({
                  setLimit: true,
                  amount: money,
                }),
              );
            }}
          />
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
  },
  backIcon: {
    height: normalize(16),
    width: normalize(16),
  },
  debitCardheader: {
    marginTop: normalize(30),
    marginStart: normalize(20),
  },
  debitCardheaderText: {
    color: Colors.white,
    fontFamily: Fonts.avenirNextBold,
    fontSize: normalize(20),
    marginStart: normalize(20),
    marginTop: normalize(20),
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
    marginTop: normalize(30),
    borderTopStartRadius: normalize(30),
    borderTopEndRadius: normalize(30),
  },
  setWeeklyIcon: {
    height: normalize(20),
    width: normalize(20),
  },
});
