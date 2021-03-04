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
  ImageBackground,
} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {Card, CardItem, Body} from 'native-base';
import StickyHeaderFooterScrollView from 'react-native-sticky-header-footer-scroll-view';
import FeatherIcon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const ComedyMovies = (props) => {
  const isFocused = useIsFocused();

  useEffect(() => {}, [props, isFocused]);

  const dataMovies = [
    {
      id: 1,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VwB1KWCwZsTkTCt-1AqLQulVrkjn9Jr96Q&usqp=CAU',
      name: 'Mirzapur',
    },
    {
      id: 2,
      imageUri:
        'https://blogtobollywood.com/wp-content/uploads/2021/01/Telugu-movie-Red.jpg',
      name: 'Red',
    },
    {
      id: 3,
      imageUri:
        'https://i.pinimg.com/originals/e5/7b/5a/e57b5a031e365fb54fded45bbe8bdee0.jpg',
      name: 'Breathe',
    },
    {
      id: 4,
      imageUri:
        'https://image.scoopwhoop.com/w360/s4.scoopwhoop.com/anj2/5dd6457650758d76b6503bb2/bd3f981a-79ea-4c43-a22b-5a73bd92b771.jpg.webp',
      name: 'Sacred Games',
    },
    {
      id: 5,
      imageUri:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtc3n-wll3kCg_HrAWQl9FwVK9Y6UKsla7kg&usqp=CAU',
      name: 'Money Heist',
    },
  ];

  const listOfMovies = ({item}) => {
    return (
      <TouchableOpacity
        style={[styles.card]}
        onPress={() => {
          console.log(item);
        }}>
        <Image
          style={styles.cardImage}
          source={{uri: item.imageUri}}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.name}</Text>
        <FeatherIcon name="play" size={22} color="white" />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContent}>
        <ImageBackground
          style={{flex: 1}}
          source={{
            uri:
              'https://www.teahub.io/photos/full/253-2535453_comedy-film-mr-bean.jpg',
          }}
          blurRadius={1}>
          <Text
            style={{
              color: '#FFFFFF',
              textAlign: 'center',
              marginTop: '25%',
              fontFamily: 'MuktaMalar-SemiBold',
              fontSize: 23,
            }}>
            Comedy Movies
          </Text>
        </ImageBackground>
      </View>

      {/* <View style={{flex: 1}}>
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
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          style={{
            width: width * 0.456,
            height: height * 0.13793103448,
            backgroundColor: 'powderblue',
            margin: 5,
          }}
          source={{
            uri:
              'https://content1.jdmagicbox.com/movies/mumbai_10725989252019_06_14_07_12_17_220.jpg?fit=around|210:308&crop=210:308;*,*',
          }}
          resizeMode="cover"
        />
        <Image
          style={{
            width: width * 0.456,
            height: height * 0.13793103448,
            backgroundColor: 'powderblue',
            margin: 5,
          }}
          source={{
            uri:
              'https://content1.jdmagicbox.com/movies/mumbai_10725989252019_06_14_07_12_17_220.jpg?fit=around|210:308&crop=210:308;*,*',
          }}
          resizeMode="cover"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1F33',
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
    width: width,
    //height: 150,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 1,
  },
  cardImage: {
    height: 70,
    width: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: '#FFFFFF',
  },
});
export default ComedyMovies;
