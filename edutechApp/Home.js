import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import FeedScreen from './components/screens/FeedScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import TasksScreen from './components/screens/TasksScreen';
import GroupsScreen from './components/screens/GroupsScreen';

export default class App extends Component {
    render() {
      return (
        <HomeTabNavigator></HomeTabNavigator>
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
            backgroundColor: '#f2f2f2'
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