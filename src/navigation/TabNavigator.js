import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AuStackNavigator,
  MainStackNavigator,
  SearchStacKNavigator,
  WishListStacKNavigator,
  ProfileStacKNavigator,
} from './StackNavigator';

import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';

import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import Ant from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const Tabs = AnimatedTabBarNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({})}
      tabBarOptions={{
        activeTintColor: '#2F7C6E',
        inactiveTintColor: '#FFFFFF',
        activeBackgroundColor: '#FFFFFF',
        tabStyle: {
          //borderTopLeftRadius: 25,
          //borderTopRightRadius: 25,
          //borderTopLeftColor: '#0D1F33',
          //borderTopRightColor: '#0D1F33',
          //tabBarBackground: '#0D1F33',
          //borderColor: '#0D1F33',
          //postion: 'absolute',
        },
      }}
      appearence={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        tabBarBackground: '#121A23',
        //floating: true,
      }}
      //style={{position: 'absolute'}}
    >
      <Tabs.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="home"
              size={size ? size : 24}
              color={focused ? '#FFFFFF' : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        component={SearchStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="search1"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Whishlist"
        component={WishListStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="hearto"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={ProfileStacKNavigator}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ant
              name="user"
              size={size ? size : 24}
              color={focused ? color : '#FFFFFF'}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default BottomTabNavigator;
