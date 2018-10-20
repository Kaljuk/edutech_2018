import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { createStackNavigator } from 'react-navigation';

import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './Home';

import QuestionScreen from './components/screens/QuestionScreen';
import ThankYouScreen from './components/screens/ThankYouScreen';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <AppStackNavigator></AppStackNavigator>
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },
  Questions: {
    screen: QuestionScreen
  },
  AfterQuestion: {
    screen: ThankYouScreen
  }
}, {
  initialRouteName: 'Questions',//'Login',
  headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});