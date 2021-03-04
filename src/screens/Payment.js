import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Text,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';
import ImageSliderComponent from '../components/ImageSlider';

const {height, width} = Dimensions.get('window');

const Payment = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('Payment Screen');
  }
  , [props, isFocused]);

  const dataMovies = [
    {
      id: 1,
      name: 'Cash on Delivery',
      address1: 'Above Hot chips 2nd Floor, Ashok Nagar',
      address2: 'Ashok Nagar, Hyderabad',
      locality: 'Hyderabad, Telangane, 500020',
      Mobile: ' +91 9441116121',
    },
    {
      id: 2,
      name: 'Credit/Debit card',
      address1: '2nd Floor, Ashiyana Apt',
      address2: 'Banjara Hills, Hyderabad',
      locality: 'Hyderabad, Telangane, 500020',
      Mobile: ' +91 9441116121',
    },
    {
      id: 2,
      name: 'PhonePe/Google Pay /BHIM UPI',
      address1: '2nd Floor, Ashiyana Apt',
      address2: 'Banjara Hills, Hyderabad',
      locality: 'Hyderabad, Telangane, 500020',
      Mobile: ' +91 9441116121',
    },
    ,
    {
      id: 2,
      name: 'Payment/Wallets',
      address1: '2nd Floor, Ashiyana Apt',
      address2: 'Banjara Hills, Hyderabad',
      locality: 'Hyderabad, Telangane, 500020',
      Mobile: ' +91 9441116121',
    },
    {
      id: 2,
      name: 'Net Banking',
      address1: '2nd Floor, Ashiyana Apt',
      address2: 'Banjara Hills, Hyderabad',
      locality: 'Hyderabad, Telangane, 500020',
      Mobile: ' +91 9441116121',
    },
  ];

  const listOfMovies = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          console.log('H')        }}>
        <View style={styles.containerFlat}>
          <View style={styles.content}>
            <View style={styles.text}>
              <Text
                style={{
                  color: '#403D3D',
                  fontSize: 16,
                  fontFamily: 'arial-bold',
                  marginBottom: 5,
                }}>
                {item.name}
              </Text>
            </View>
            
           
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderBottomWidth: 1,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 30,
        }}>
        <Text
          style={{
            color: '#403D3D',
            textAlign: 'center',
            fontFamily: 'arial-bold',
            fontSize: 18,
            marginTop: 42,
            color: '#403D3DE5',
          }}>
          PAYMENT
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          console.log('COD')        }}>
        <View style={styles.containerFlat}>
          <View style={styles.content}>
            <View style={styles.text}>
              <Text
                style={{
                  color: '#403D3D',
                  fontSize: 16,
                  fontFamily: 'arial-bold',
                  marginBottom: 5,
                }}>
                COD
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* <View style={{flex: 1, marginTop: 23}}>
        <FlatList
          nestedScrollEnabled={true}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
          data={dataMovies}
          renderItem={listOfMovies}
          keyExtractor={(item, index) => index.toString()}
          //style={{marginHorizontal: 5}}
        />
      </View> */}

      <TouchableHighlight
        style={[styles.buttonContainer, styles.sendButton]}
        onPress={() => console.log('Add Address')}>
        <Text style={styles.buttonText} numberOfLines={1}>
          Add New Address
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  card: {
    width: width * 0.88850666666,
    //height: 150,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //borderWidth: 1,
    //marginLeft: 21,
  },
  cardImage: {
    height: 70,
    width: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 14,
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'arial-bold',
    marginLeft: 7,
  },

  containerFlat: {
    //padding: 16,
    //padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    alignItems: 'flex-start',
    width: width * 0.92,
    elevation: 1,
    shadowColor: '#00000029',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  content: {
    flex: 1,
    //marginLeft: 16,
    //marginRight: 0,20
    marginBottom: 10,
  },
  mainContent: {
    marginRight: 60,
  },
  timeAgo: {
    fontSize: 13,
    color: '#403D3D',
    fontFamily: 'Arial regular',
    marginTop: 5,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    //width: 100,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
    padding: 5,
  },
  sendButton: {
    backgroundColor: '#1E1E1D',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'arial-bold',
  },
});
export default Payment;
