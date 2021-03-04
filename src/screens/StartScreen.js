import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//import DrawerNavigator from './navigation/DrawerNavigator';
//import DrawerNavigator from '../navigation/DrawerNavigator';
//import AuthStackNavigator from './navigation/AuthStackNavigator';
//import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import AuthStackNavigator from '../navigation/AuthStackNavigator';
import TabNavigator from '../navigation/TabNavigator';
import DrawerNavigator from '../navigation/DrawerNavigator';

const StartScreen = () => {
  const id = useSelector((state) => state.login.userId);

  return (
    <>
      {/*  <NavigationContainer>
        {id == null ? <AuthStackNavigator /> : <DrawerNavigator />}
      </NavigationContainer> */}

      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        <AuthStackNavigator />
        {/* {id == null ? <AuthStackNavigator /> : <DrawerNavigator />} */}
        {/* {id == null ? <AuthStackNavigator /> : <DrawerNavigator />} */}
      </NavigationContainer>
    </>
  );
};
export default StartScreen;
