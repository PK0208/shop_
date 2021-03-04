import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
//import {Badge} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
export default function Appbar(props) {
  //const id = useSelector((state) => state.login.userId);
  const onPress = () => props.navigation.openDrawer();
  const isFocused = useIsFocused();
  const [count, setCount] = useState(0);
  useEffect(() => {}, [props, isFocused]);
  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity onPress={onPress}>
        {/* <Feather name="menu" color="white" size={25} /> */}
        <Ant name="bars" color="white" size={25} />
      </TouchableOpacity>
      <View>
        <Text style={styles.titleText}>Name of the app</Text>
      </View>
      <Icon
        name="notifications"
        color="white"
        size={25}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <Icon
        name="cart-outline"
        color="white"
        size={25}
        onPress={() => props.navigation.navigate('CartScreen')}
      />
      {/* <Badge
        size={25}
        style={{
          position: 'absolute',
          right: 10,
          top: 3,
          backgroundColor: 'red',
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {count}
      </Badge> */}
    </View>
  );
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20 /*,borderBottomLeftRadius:30*/,
    alignItems: 'center',
    backgroundColor: '#97D5F3',
    height: height * 0.082065217391,
    justifyContent: 'space-between',
    borderRadius: 35,
    marginTop: 5,
  },
  titleText: {
    color: 'white',
    fontSize: width * 0.062801932367,
    fontFamily: 'impact-regular',
    fontWeight: 'bold',
  },
});
