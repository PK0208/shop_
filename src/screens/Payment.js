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
import MatComIcon from 'react-native-vector-icons/MaterialCommunityIcons'; //truck-delivery
import AntIcon from 'react-native-vector-icons/AntDesign'; //creditcard //wallet
import MatIcon from 'react-native-vector-icons/MaterialIcons'; //payment
import FontIcon from 'react-native-vector-icons/FontAwesome'; //netBanking

const {height, width} = Dimensions.get('window');

const Payment = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('Payment Screen');
  }, [props, isFocused]);

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
            marginLeft: width * 0.048,
          }}>
          PAYMENT
        </Text>
      </View>

      <View style={{marginTop: 20}}>
        <View style={{margin: 5}}>
          <TouchableOpacity
            style={styles.paymentCard}
            onPress={() => console.log('Net Banking')}>
            <MatComIcon name="truck-delivery" size={20} color="#000000" />
            <Text style={styles.paymentText}>Cash On Delivery</Text>
          </TouchableOpacity>
        </View>

        <View style={{margin: 5}}>
          <TouchableOpacity
            style={styles.paymentCard}
            onPress={() => console.log('Net Banking')}>
            <AntIcon name="creditcard" size={20} color="#000000" />
            <Text style={styles.paymentText}>Credit / Debit Card</Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 5}}>
          <TouchableOpacity
            style={styles.paymentCard}
            onPress={() => console.log('Net Banking')}>
            <AntIcon name="creditcard" size={20} color="#000000" />
            <Text style={styles.paymentText}>
              Phone Pay/ Google Pay/ BHIM UPI
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 5}}>
          <TouchableOpacity
            style={styles.paymentCard}
            onPress={() => console.log('Net Banking')}>
            <AntIcon name="wallet" size={20} color="#000000" />
            <Text style={styles.paymentText}>PayTm / Wallets</Text>
          </TouchableOpacity>
        </View>

        <View style={{margin: 5}}>
          <TouchableOpacity
            style={styles.paymentCard}
            onPress={() => console.log('Net Banking')}>
            <FontIcon name="bank" size={20} color="#000000" />
            <Text style={styles.paymentText}>Net Banking</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          shadowOpacity: 1,
          shadowColor: '#00000029',
          width: width * 0.92,
          marginLeft: width * 0.048,
          margin: 5,
        }}>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 14,
            color: '#403D3D',
            fontFamily: 'arial-bold',
          }}>
          Price Details
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderColor: '#00000029',
            width: '80%',
            marginLeft: 15,
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textLeft}>Total MRP</Text>
            <Text style={styles.textLeft}>Discount On MRP</Text>
            <Text style={styles.textLeft}>Delivery Charges</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.textRight}>₹2999</Text>
            <Text style={styles.textRight}>-₹300</Text>
            <Text style={styles.textRight}>₹50</Text>
          </View>
        </View>
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.sendButton]}
        onPress={() => console.log('Pay Now')}>
        <Text style={styles.buttonText} numberOfLines={1}>
          Pay Now
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
  paymentText: {
    color: '#403D3D',
    fontSize: 16,
    fontFamily: 'arial-bold',
    //marginBottom: 5,
    textAlign: 'center',
    marginLeft: width * 0.048,
  },
  paymentCard: {
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: width * 0.92,
    marginLeft: width * 0.04,
    paddingLeft: width * 0.052,
    padding: 5,
  },
  textLeft: {
    fontFamily: 'Arial regular',
    color: '#403D3D',
    fontSize: 13,
    margin: 2,
  },
  textRight: {
    marginLeft: (width * 0.552) / 2,
    fontFamily: 'Arial regular',
    color: '#403D3D',
    fontSize: 13,
    margin: 2,
  },
});
export default Payment;
