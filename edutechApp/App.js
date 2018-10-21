import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { 
  createStackNavigator,
  NavigationActions
} from 'react-navigation';

import LoginScreen from './components/screens/LoginScreen';
import HomeScreen from './Home';

import QuestionScreen from './components/screens/QuestionScreen';
import ThankYouScreen from './components/screens/ThankYouScreen';


// LazyLogging
const log = console.log;

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.someEvent = this.someEvent.bind(this);
    this._nav;
  }

  componentDidMount() {
    log("Timeout set");
    setTimeout( () => {
      log("Calling someEvent");
      this.someEvent()
    }, 1000); 
  }

  someEvent() {
    // call navigate for AppNavigator here:
    log("Some Event");
    const routeName = 'Login';
    const params = {/* Questionnaire: ... */};
    // log(this._nav);
    this._nav.dispatch(
      NavigationActions.navigate({
        type: NavigationActions.NAVIGATE,
        routeName,
        params
      })
    );
  }

  render() {
    return (
      <AppStackNavigator ref={navigatorRef => { this._nav = navigatorRef; }}>
      </AppStackNavigator>
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
  initialRouteName: 'Login',//' Login',
  headerMode: 'none'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});