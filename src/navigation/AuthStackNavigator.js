import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import Login from '../screens/Authentication/LoginScreen';
//import SignUp from '../screens/Authentication/SignUpScreen';
//import ForgotPassword from '../screens/Authentication/ForgotPassword';
import TabNavigator from './TabNavigator';
import StackNavigator from './StackNavigator';

import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Shipment from '../screens/Shipment';
import Address from '../screens/Address';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AuthStack.Navigator mode={'model'} screenOptions={{headerShown: false}}>
        <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'Home'} component={Home} />
        <AuthStack.Screen name={'Shipment'} component={Shipment} />
        <AuthStack.Screen name={'Address'} component={Address} />
        {/* <AuthStack.Screen name={'Login'} component={Login} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'SignUp'} component={SignUp} />
        <AuthStack.Screen name={'Forgot Password'} component={ForgotPassword} /> */}
      </AuthStack.Navigator>
    </>
  );
};

export default AuthStackNavigator;
