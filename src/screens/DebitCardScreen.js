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
import SmallGreenBox from '../components/SmallGreenBox';
import CardComponent from '../components/CardComponent';
import AccountOptionComponent from '../components/AccountOptionComponent';
import {accountOptionData} from '../utils/staticData/AccountOptionData';
import BottomSheet from 'reanimated-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import showErrorAlert from '../utils/helpers/Toast';
import {getUserDetails, setUserSpendingLimit} from '../redux/action/AuthAction';
import {
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  SET_USER_SPENDING_LIMIT_REQUEST,
  SET_USER_SPENDING_LIMIT_SUCCESS,
} from '../redux/store/TypeConstants';
import status from '../utils/helpers/status';
import {useFocusEffect} from '@react-navigation/native';
import Loader from '../utils/helpers/AuthLoader';
import * as Progress from 'react-native-progress';

export default function DebitCardScreen(props) {
  const dispatch = useDispatch();
  const AuthReducer = useSelector(state => state.AuthReducer);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getUserDetails());
    }, []),
  );

  const renderContent = () => (
    <View style={styles.bottomViewContainer}>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          position: 'absolute',
          top: normalize(-100),
        }}>
        <CardComponent
          name={`${
            AuthReducer?.userDetails?.first_name +
            AuthReducer?.userDetails?.last_name
          }`}
          cardNumber={['5647', '1234', '9998', '2312']}
          validThru={'11/25'}
          cvv={'678'}
        />

        {AuthReducer?.spendingLimit?.setLimit && (
          <View style={{marginBottom: normalize(10)}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontFamily: Fonts.avenirNextMedium,
                  marginVertical: normalize(5),
                }}>
                Debit card spending limit
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.avenirNextMedium,
                  marginVertical: normalize(5),
                  color: Colors.green,
                }}>
                {`$365 | `}
                <Text style={{color: Colors.textGrey}}>
                  {AuthReducer?.spendingLimit?.amount}
                </Text>
              </Text>
            </View>
            <Progress.Bar
              progress={0.3}
              width={normalize(280)}
              height={normalize(10)}
              color={Colors.green}
              borderRadius={15}
              unfilledColor={Colors.lightGreen}
            />
          </View>
        )}

        {(AuthReducer.status === GET_USER_DETAILS_SUCCESS ||
          AuthReducer.status === SET_USER_SPENDING_LIMIT_REQUEST ||
          AuthReducer.status === SET_USER_SPENDING_LIMIT_SUCCESS) &&
          accountOptionData.map((item, idx) => (
            <View key={idx}>
              <AccountOptionComponent
                idx={idx}
                icon={item.icon}
                checkboxReq={item.checkBoxReq}
                title={item.title}
                desc={
                  idx !== 1
                    ? item.desc
                    : AuthReducer?.spendingLimit?.setLimit
                    ? `Your weekly spending limit is S$ ${
                        AuthReducer?.spendingLimit?.amount.split('.')[0]
                      }`
                    : item.desc
                }
                onSelected={check => {
                  if (idx === 1) {
                    if (check) props.navigation.navigate('SpendingLimitScren');
                    else {
                      dispatch(
                        setUserSpendingLimit({
                          setLimit: false,
                        }),
                      );
                    }
                  }
                }}
              />
            </View>
          ))}
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <Fragment>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.themeColor}
      />
      <Loader visible={AuthReducer.status === GET_USER_DETAILS_REQUEST} />

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
          <BottomSheet
            ref={sheetRef}
            snapPoints={['91%', '68.5%']}
            borderRadius={10}
            renderContent={renderContent}
            initialSnap={1}
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
    height: normalize(620),
    backgroundColor: Colors.white,
    marginTop: normalize(100),
    borderTopStartRadius: normalize(30),
    borderTopEndRadius: normalize(30),
  },
});
//"react-native-reanimated": "^2.2.0",
