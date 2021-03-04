import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStore, combineReducers} from 'redux';
import StartScreen from './src/screens/StartScreen';
import {Provider} from 'react-redux';
//import loginReducer from '../user_app/src/store/reducers/loginReducer';
import loginReducer from './src/store/reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
