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

const Home = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    //console.log('Height & Width', height, width);
  }, [props, isFocused]);

  return (
    <Container>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Left>
          <Button transparent>
            <AntIcon
              name="doubleleft"
              color="#000000"
              size={20}
              style={{margin: 5}}
              onPress={() => onPressBackHandler()}
            />
          </Button>
        </Left>
        <Body>
          <Text style={{color: '#403D3D', marginTop: 20, fontSize: 18}}>
            What are you Shopping for
          </Text>
        </Body>

        <Right></Right>
      </View>
      <View style={{alignItems: 'center', marginHorizontal: 30, marginTop: 35}}>
        <Image
          style={styles.productImg}
          //source={require('../assests/images/men1.jpg')}
          source={{
            uri:
              'https://images.pexels.com/photos/2760848/pexels-photo-2760848.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={() => props.navigation.navigate('Shipment')}>
          <Text style={styles.textGender}>Men</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginHorizontal: 30, marginTop: 35}}>
        <Image
          style={styles.productImg}
          //source={require('../assests/images/woman1.jpg')}
          source={{
            uri:
              'https://fbistyle.com/wp-content/uploads/2020/09/pexels-godisable-jacob-794064-180x180.jpg',
          }}
          resizeMode="cover"
        />
        <Text style={styles.textGender}>Woman</Text>
      </View>
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
});
export default Home;
