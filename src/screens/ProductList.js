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
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ImageSliderComponent from '../components/ImageSlider';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fefdf7;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`;

const ProductList = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    //console.log('Height & Width', height, width);
    console.log('Product List');
  }, [props, isFocused]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 73,
          borderWidth: 1,
          borderColor: '#00000029',
          //elevation: 1,
          width: width * 0.92,
          marginLeft: 15,
          paddingVertical: 5,
          shadowColor: '#00000029',
          shadowRadius: 10,
          shadowOpacity: 1,
          shadowOffset: {width: 0, height: 3},
        }}>
        <Image
          source={{
            uri:
              'https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg?cs=srgb&dl=pexels-jaysen-scott-1858488.jpg&fm=jpg',
          }}
          style={{
            marginLeft: (width * 0.096) / 2,
            width: width * 0.26133333333,
            height: height * 0.09774964838 * 2,
            borderRadius: 8,
          }}
          resizeMode={'contain'}
        />
        <View
          style={{
            flexDirection: 'column',
          }}>
          <Text
            style={{
              marginLeft: 10,
              marginTop: 22,
              fontFamily: 'arial-bold',
              color: '#363535',
              fontSize: 16,
            }}
            numberOfLines={1}>
            Pink full hand T-shirts T-shirts{' '}
          </Text>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#505050'}}>
            ₹2999{' '}
          </Text>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#505050'}}>
            Size: S
          </Text>
          <Text style={{marginLeft: 10, marginTop: 5, color: '#505050'}}>
            Qty: 1
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: '#707070',
              justifyContent: 'flex-end',
              marginLeft: 93,
              width: width * 0.25866666666,
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <TouchableOpacity onPress={() => console.log('Edit Pressed')}>
              <Text style={{margin: 5, color: '#5E5E5E'}}>Add to Wishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
            <Text>Total : ₹2999</Text>
            <Text>INCLUDING GST</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              //borderColor: '#707070',
              //justifyContent: 'flex-end',
              marginLeft: 93,
              width: width * 0.272,
              alignItems: 'center',
              borderRadius: 5,
              backgroundColor: '#313030',
            }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Shipment')}>
              <Text style={{margin: 5, color: '#FEFDF7'}}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productImg: {
    width: width * 0.78133333333,
    height: height * 0.31896551724,
    borderRadius: 9,
    //borderRadius: 27,
  },
  textGender: {
    marginTop: 12,
    fontSize: 18,
    color: '#575353',
    fontFamily: 'arial-bold',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    //alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: '#1E1E1D',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'arial-bold',
  },
  bottomView: {
    borderTopWidth: 1,
    width: '80%',
    height: 50,
    //backgroundColor: '#EE5407',
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    marginLeft: 35.7,
    padding: 5,
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
export default ProductList;
