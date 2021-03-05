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
  const [isPressS, setIsPressS] = React.useState(false);
  const [isPressM, setIsPressM] = React.useState(false);
  const [isPressL, setIsPressL] = React.useState(false);
  const [isPressXL, setIsPressXL] = React.useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    //console.log('Height & Width', height, width);
    console.log('Product Details by id');
  }, [props, isFocused]);

  /* const increaseQuantity = () => {
    let tempValue = parseInt(quantity);
    let tempAmount = parseFloat(total);
    tempValue++;
    //tempAmount = price * tempValue;
    //setTotal(tempAmount);
    //setTempState(1);
    setQuantity(tempValue);
    console.log('IncreaseQ1', tempValue);

    console.log('IncreaseQ', quantity);
    //console.log('IncreaseQT', tempValue);
  }; */

  /* const decreaseQuantity = () => {
    let tempValue = parseInt(quantity);
    let tempAmount = parseFloat(total);
    if (tempValue <= parseInt(min)) {
      tempValue = parseFloat(min);
    } else {
      tempValue--;
    }
    console.log('decreaseQ', tempValue);
    //setTempState(1);
    //tempAmount = price * tempValue;
    //setTotal(tempAmount);
    //setQuantity(tempValue);
  }; */

  const selectSmall = () => {
    console.log('selectSmall');
    let tempValue = parseInt(quantity);
    //let tempValue;
    tempValue++;
    console.log('selectSmall', tempValue); //1 //2 //3
    if (tempValue % 2 == 0) {
      //console.log('tempValue selectSmall Even');
      setIsPressS(!isPressS);
      //setIsPressM(!isPressM);
      //console.log('tempValue selectSmall state', isPressS);
    } else {
      //console.log(' tempValue selectSmall Odd');
      setIsPressS(!isPressS);
      //setIsPressM(!isPressM);
      //console.log('tempValue selectSmall state', isPressS);
    }
    setQuantity(tempValue);
    //console.log('selectSmall', quantity); //0 //1 //2
    console.log('==================');
    if (quantity % 2 == 0) {
      console.log('quantity selectSmall Even');
      setIsPressS(!isPressS);
      console.log('tempValue selectSmall state f', isPressS);
    } else {
      console.log('quantity selectSmall Odd');
      setIsPressS(!isPressS);
      console.log('tempValue selectSmall state t', isPressS);
    }
  };

  const selectMedium = () => {
    console.log('selectMedium');
    let tempValue = parseInt(quantity);
    tempValue++;
    if (quantity % 2 == 0) {
      console.log('quantity selectSmall Even');
      setIsPressM(!isPressM);
      console.log('tempValue selectSmall state f', isPressS);
    } else {
      console.log('quantity selectSmall Odd');
      setIsPressM(!isPressM);
      console.log('tempValue selectSmall state t', isPressS);
    }
  };

  const selectLarge = () => {
    console.log('selectLarge');
    let tempValue = parseInt(quantity);
    tempValue++;
    if (quantity % 2 == 0) {
      setIsPressL(!isPressL);
    } else {
      setIsPressL(!isPressL);
    }
  };

  const selectXtraLarge = () => {
    console.log('selectXtraLarge');
    if (quantity % 2 == 0) {
      setIsPressXL(!isPressXL);
    } else {
      setIsPressXL(!isPressXL);
    }
  };

  const selectSizeGuide = () => {
    console.log('selectSizeGuide');
  };

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

      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 6}}>
        <TouchableHighlight
          style={[styles.buttonContainer, styles.sendButton]}
          onPress={() => console.log('Login')}>
          <Text style={styles.buttonText}>Add to bag</Text>
        </TouchableHighlight>

        <AntIcon
          name="sharealt"
          color="black"
          size={25}
          onPress={() => console.log('Share')}
          style={{marginLeft: width * 0.47773333333}}
        />

        <AntIcon
          name="hearto"
          color="black"
          size={25}
          onPress={() => console.log('Heart')}
          style={{marginLeft: width * 0.04026666666}}
        />
      </View>
      <Text
        style={{
          marginLeft: 20,
          fontFamily: 'Arial regular',
          color: '#363535',
          fontSize: 12,
        }}>
        Black solid knitted sheath dress, has a V-neck, three-quarter sleeves,
        and straight hem Black solid knitted sheath dress, has a V-neck,
        three-quarter sleeves, and straight hem
      </Text>

      <Text
        style={{
          marginLeft: 20,
          fontFamily: 'arial-bold',
          color: '#363535',
          fontSize: 16,
        }}>
        Size
      </Text>
      <View style={{flexDirection: 'row', marginLeft: 18, marginTop: 11}}>
        {/* <TouchableOpacity style={styles.sizeBox} onPress={selectSmall}>
          <Text style={styles.sizeText}>S</Text>
        </TouchableOpacity> */}
        {isPressS == true ? (
          <TouchableOpacity style={styles.sizeBox} onPress={selectSmall}>
            <Text style={styles.sizeText}>S</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.sizeBoxColor} onPress={selectSmall}>
            <Text style={styles.sizeTextColor}>S</Text>
          </TouchableOpacity>
        )}

        {isPressM == true ? (
          <TouchableOpacity style={styles.sizeBox} onPress={selectMedium}>
            <Text style={styles.sizeText}>M</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.sizeBoxColor} onPress={selectMedium}>
            <Text style={styles.sizeTextColor}>M</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity style={styles.sizeBox} onPress={selectMedium}>
          <Text style={styles.sizeText}>M</Text>
        </TouchableOpacity> */}

        {isPressL == true ? (
          <TouchableOpacity style={styles.sizeBox} onPress={selectLarge}>
            <Text style={styles.sizeText}>L</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.sizeBoxColor} onPress={selectLarge}>
            <Text style={styles.sizeTextColor}>L</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity style={styles.sizeBox} onPress={selectLarge}>
          <Text style={styles.sizeText}>L</Text>
        </TouchableOpacity> */}

        {isPressXL == true ? (
          <TouchableOpacity style={styles.sizeBox} onPress={selectXtraLarge}>
            <Text style={styles.sizeText}>XL</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.sizeBoxColor}
            onPress={selectXtraLarge}>
            <Text style={styles.sizeTextColor}>XL</Text>
          </TouchableOpacity>
        )}

        {/* <TouchableOpacity style={styles.sizeBox} onPress={selectXtraLarge}>
          <Text style={styles.sizeText}>XL</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.sizeGuide} onPress={selectSizeGuide}>
          <Text style={styles.sizeText}>Size Guide</Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          marginTop: 22,
          marginLeft: width * 0.096,
          color: '#363535',
          fontSize: 13,
          fontFamily: 'arial-bold',
        }}>
        You may also like
      </Text>

      <View style={{flexDirection: 'row', marginTop: 12}}>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductList')}>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg?cs=srgb&dl=pexels-jaysen-scott-1858488.jpg&fm=jpg',
              }}
              style={{
                marginLeft: width * 0.096,
                width: width * 0.376,
                height: height * 0.14135021097 * 2,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginTop: 16,
                marginLeft: 44,
                color: '#363535',
                fontFamily: 'arial-bold',
                fontSize: 10,
              }}>
              Pink full hand T-shirts
            </Text>
            <Text style={{marginLeft: 44, fontSize: 9}}>₹2999</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={{
              marginLeft: width * 0.096,
              width: width * 0.376,
              height: height * 0.14135021097 * 2,
              borderRadius: 5,
            }}
          />
          <Text
            style={{
              marginTop: 16,
              marginLeft: 44,
              color: '#363535',
              fontFamily: 'arial-bold',
              fontSize: 10,
            }}>
            Pink full hand T-shirts
          </Text>
          <Text style={{marginLeft: 44, fontSize: 9}}>₹2999</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 12, marginBottom: 6}}>
        <View style={{flexDirection: 'column'}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ProductList')}>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/1858488/pexels-photo-1858488.jpeg?cs=srgb&dl=pexels-jaysen-scott-1858488.jpg&fm=jpg',
              }}
              style={{
                marginLeft: width * 0.096,
                width: width * 0.376,
                height: height * 0.14135021097 * 2,
                borderRadius: 5,
              }}
            />
            <Text
              style={{
                marginTop: 16,
                marginLeft: 44,
                color: '#363535',
                fontFamily: 'arial-bold',
                fontSize: 10,
              }}>
              Pink full hand T-shirts
            </Text>
            <Text style={{marginLeft: 44, fontSize: 9}}>₹2999</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'column'}}>
          <Image
            source={{
              uri:
                'https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            }}
            style={{
              marginLeft: width * 0.096,
              width: width * 0.376,
              height: height * 0.14135021097 * 2,
              borderRadius: 5,
            }}
          />
          <Text
            style={{
              marginTop: 16,
              marginLeft: 44,
              color: '#363535',
              fontFamily: 'arial-bold',
              fontSize: 10,
            }}>
            Pink full hand T-shirts
          </Text>
          <Text style={{marginLeft: 44, fontSize: 9}}>₹2999</Text>
        </View>
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
  buttonContainer: {
    height: height * 0.02180028129 * 2,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'arial-bold',
  },

  sizeBox: {
    borderWidth: 1,
    width: width * 0.06666666666,
    height: width * 0.06666666666,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    marginLeft: 15,
  },
  sizeBoxColor: {
    borderWidth: 1,
    width: width * 0.06666666666,
    height: width * 0.06666666666,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    marginLeft: 15,
    backgroundColor: '#5D5D5D',
  },
  sizeTextColor: {
    fontFamily: 'arial-bold',
    fontSize: 14,
    color: 'white',
  },
  sizeText: {
    fontFamily: 'arial-bold',
    fontSize: 14,
    color: '#5D5D5D',
  },
  sizeGuide: {
    borderWidth: 1,
    width: width * 0.22133333333,
    height: width * 0.06666666666,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    marginLeft: width * 0.224,
  },
});
export default ProductDetailsById;
