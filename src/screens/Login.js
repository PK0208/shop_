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
  KeyboardAvoidingView,
} from 'react-native';
import Appbar from '../components/Appbar';
//import ImageSlider from '../components/ImageSlider';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Header, Left, Body, Right, Button, Icon, Title} from 'native-base';

import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

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

const Login = (props) => {
  const isFocused = useIsFocused();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  //const [arr, setArr] =  React.useState([]);

  /*  const add = () =>{
    console.log('add');
    setArr([input, ...arr]);

  } */

  useEffect(() => {}, [props, isFocused]);

  const onPressBackHandler = async () => {
    console.log('onPressBackHandler');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.containerMain}>
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
            <Title style={{color: 'black'}}>LOGIN</Title>
          </Body>

          <Right></Right>
        </View>

        <View
          style={{alignItems: 'center', marginHorizontal: 30, marginTop: 51}}>
          <Image
            style={styles.productImg}
            source={require('../assests/images/logo.jpg')}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Email"
            //value={this.state.displayName}
            onChangeText={(email) => setEmail(email)}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
            //value={this.state.displayName}
            onChangeText={(email) => setEmail(email)}
          />
        </KeyboardAvoidingView>
        <View
          style={{justifyContent: 'flex-end', marginLeft: '65%', margin: 5}}>
          <Text>Forgot password</Text>
        </View>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => console.log('Login')}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainerSocialG, styles.sendButtonSocialG]}
          onPress={() => console.log('CONNECT WITH GOOGLE')}>
          <Text style={styles.buttonTextG}>CONNECT WITH GOOGLE</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.buttonContainerSocial, styles.sendButtonSocialF]}
          onPress={() => console.log('CONNECT WITH FACEBOOK')}>
          <Text style={styles.buttonTextF}>CONNECT WITH FACEBOOK</Text>
        </TouchableHighlight>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={styles.textStyle}>Not yet a member ? Sign up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productImg: {
    width: width * 0.808,
    height: height * 0.19334975369,
    //borderRadius: 27,
  },
  inputStyle: {
    width: '80%',
    //marginBottom: 15,
    //paddingBottom: 15,
    alignSelf: 'center',
    borderColor: '#403D3DC9',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
  },
  sendButton: {
    backgroundColor: '#1E1E1D',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'arial-bold',
  },
  buttonContainerSocial: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    alignSelf: 'center',
  },
  buttonContainerSocialG: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    borderRadius: 10,
    borderColor: '#00000041',
    borderWidth: 1,
    alignSelf: 'center',
  },
  sendButtonSocialG: {
    backgroundColor: '#FFFFFF',
  },
  sendButtonSocialF: {
    backgroundColor: '#3B5998',
  },
  buttonTextG: {
    color: '#000000',
    fontFamily: 'arial-bold',
  },
  buttonTextF: {
    color: 'white',
    fontFamily: 'arial-bold',
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    backgroundColor: 'white',
  },
  containerMain: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#FEFDF7',
  },
  bottomView: {
    width: '80%',
    height: 50,
    backgroundColor: '#FEFDF7',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    borderTopWidth: 1,
    borderColor: '#403D3DE5',
    marginLeft: '10%',
  },
  textStyle: {
    color: '#403D3DE5',
    fontSize: 14,
  },
});
export default Login;
