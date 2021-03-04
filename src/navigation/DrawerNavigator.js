import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../components/DrawerContent';
//import { StoreStackNavigator } from "./StackNavigator";
//import CartScreen from '../screens/CartScreen';
//import SupportScrreen from '../screens/SupportScreen';
//import AboutScreen from '../screens/AboutScreen';
import TabNavigator from './TabNavigator';
//import Payment from '../screens/PaymentDetailsScreen';
//import AddAddress from '../screens/AddAddress';
//import AddressList from '../screens/AddressList';
//import Trade from '../screens/TradeManagement';

//import Settings from '../screens/Settings';

//import Billing from '../screens/BillingHistory';
//import Contact from '../screens/ContactUs';
//import About from '../screens/AboutUs';
//import Logout from '../screens/LogOut';
//import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      {/* <Drawer.Screen name="SignUp" component={TabNavigator} />
      <Drawer.Screen name="Home" component={TabNavigator} /> */}
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      {/* <Drawer.Screen name="Billing" component={Billing} /> */}
      {/* <Drawer.Screen name="Contact" component={Contact} /> */}
      {/* <Drawer.Screen name="About" component={About} /> */}
      {/* <Drawer.Screen name="Logout" component={Logout} /> */}
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
