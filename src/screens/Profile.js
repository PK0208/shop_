import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import Icon from 'react-native-vector-icons/AntDesign';
import ImageSliderComponent from '../components/ImageSlider';

const {height, width} = Dimensions.get('window');

const Profile = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container1}>
        <View style={{alignItems: 'center', marginHorizontal: 30}}>
          <Image
            style={styles.productImg}
            source={require('../assests/images/nairobi.jpg')}
          />
          <Text style={styles.name}>Nairobi</Text>

          <View
            style={{
              borderWidth: 2,
              borderColor: '#B1B1B1',
              width: '100%',
            }}></View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: 20,
              margin: 15,
            }}>
            <Text style={styles.rightText}>My list</Text>
            <Text style={styles.rightText}>Subsection</Text>
            <Text style={styles.rightText}>Change Name</Text>
            <Text style={styles.rightText}>Change Email</Text>
            <Text style={styles.rightText}>Change Phone No.</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.rightText}>Log out </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'column', margin: 15}}>
            <Text style={styles.leftText}> </Text>
            <Text style={styles.leftText}>Exp.Date: 06/22</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
          margin: 5,
        }}>
        <Text style={styles.bottomText}>Contact us</Text>
        <View
          style={{borderWidth: 1, borderColor: '#707070', margin: 5}}></View>
        <Text style={styles.bottomText}>About us</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F33',
  },
  cardStyle: {
    backgroundColor: '#0D1F33',
    //padding: 10,
    //marginLeft: 0,
    //marginRight: 0,
    //marginTop: 0,
  },
  container1: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: width * 0.35733333333,
    height: width * 0.35733333333,
    borderRadius: 27,
  },
  name: {
    fontSize: 23,
    color: '#FFFFFF',
    //fontWeight: 'bold',
    fontFamily: 'MuktaMalar-Bold',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  rightText: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'HelveticaNeue Regular',
    color: '#EBE8E8',
    //fontWeight: '700',
  },
  leftText: {
    fontSize: 18,
    margin: 5,
    fontFamily: 'HelveticaNeue Regular',
    color: '#EBE8E8',
    //fontWeight: '700',
  },
  bottomText: {
    fontSize: 14,
    fontFamily: 'HelveticaNeue Regular',
    color: '#B9B8B8',
  },
});
export default Profile;
