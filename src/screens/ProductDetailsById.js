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

const ProductDetailsById = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    //console.log('Height & Width', height, width);
  }, [props, isFocused]);

  return (
    <Container>
      <Poster source={require('../assests/images/woman1.jpg')}></Poster>

      <Text
        style={{
          marginLeft: 20,
          marginTop: 22,
          fontFamily: 'arial-bold',
          color: '#363535',
        }}>
        Pink full hand T-shirts T-shirts{' '}
      </Text>
      <Text style={{marginLeft: 20, marginTop: 5, color: '#505050'}}>
        ₹2999{' '}
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => console.log('Login')}>
          <Text style={styles.buttonText}>Add to bag</Text>
        </TouchableHighlight>

        <AntIcon
          name="sharealt"
          color="black"
          size={25}
          onPress={() => console.log('SHare')}
        />

        <AntIcon
          name="hearto"
          color="black"
          size={25}
          onPress={() => console.log('Heaert')}
        />
      </View>
      <Text
        style={{
          marginLeft: 20,
          marginTop: 2,
          fontFamily: 'Arial regular',
          color: '#363535',
          fontSize: 12,
        }}>
        Black solid knitted sheath dress, has a V-neck, three-quarter sleeves,
        and straight hem Black solid knitted sheath dress, has a V-neck,
        three-quarter sleeves, and straight hem
      </Text>
    </Container>
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
});
export default ProductDetailsById;
