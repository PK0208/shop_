import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const BackNavigationAppBar = (props) => {
  return (
    <View
      style={{
        height: height * 0.0883152173913043,
        backgroundColor: '#97D5F3',
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: width * 0.0555555555555556,
      }}>
      <Icon
        name="left"
        color="white"
        size={25}
        onPress={() => props.navigation.goBack()}
      />
      <Text
        style={{
          color: 'white',
          marginLeft: width * 0.1038647342995169,
          fontSize: width * 0.0483091787439614,
        }}>
        {props.text}
      </Text>
    </View>
  );
};
const {height, width} = Dimensions.get('window');
export default BackNavigationAppBar;
