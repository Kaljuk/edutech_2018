import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { 
    createMaterialTopTabNavigator,
    NavigationActions
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


import FeedScreen from './components/screens/FeedScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import TasksScreen from './components/screens/TasksScreen';
import GroupsScreen from './components/screens/GroupsScreen';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.addQuiz  = this.addQuiz.bind(this);
        this.openQuiz = this.openQuiz.bind(this);
        this._nav;
    }
    componentDidMount() {
        // this.openQuiz();
    }
    openQuiz() {
        this.props.navigation.navigate('Questions');
    }
    addQuiz() {
        console.log("Nav to questionnaire");
        // this._nav.navigate('Questions');
        const routeName = "Groups";
        const params = { quiz: this.openQuiz };
        this._nav.dispatch(
            NavigationActions.navigate({
                type: NavigationActions.NAVIGATE,
                routeName,
                params
            })
        );
    }
    render() {
      console.log(this._nav)
      return (
        <HomeTabNavigator screenProps={{ quiz: this.openQuiz }} ref={navigatorRef => { this._nav = navigatorRef; }}>
        </HomeTabNavigator>
      );
    }
  }

  const HomeTabNavigator = createMaterialTopTabNavigator({
    Feed: {
      screen: FeedScreen,
      navigationOptions: {
          tabBarIcon: ({tintColor}) => (
              <Icon name='ios-filing' color={tintColor} size={32}></Icon>
          )
      }
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-contact' color={tintColor} size={26}></Icon>
            )
        }
    },
    Tasks: {
        screen: TasksScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-browsers' color={tintColor} size={28}></Icon>
            )
        }
    },
    Groups: {
        screen: GroupsScreen,
        navigationOptions: {
            tabBarIcon: ({tintColor}) => (
                <Icon name='ios-people' color={tintColor} size={32}></Icon>
            )
        }
    }
  }, {
    initialRouteName: 'Feed',
    order: ['Feed', 'Groups', 'Tasks', 'Profile'],
    tabBarPosition: 'bottom',
    tabBarOptions: {
        activeTintColor: 'orange',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: '#ddd'
        },
        showIcon: true,
        showLabel: false,
    }
  });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});