import React, { Component } from "react";
import { createStackNavigator } from 'react-navigation';
import HomeTask from './tasks/HomeTask';
import NewTask from './tasks/NewTask';

export default class TasksScreen extends Component {
    render() {
        return (
            <TaskNavigator></TaskNavigator>
        );
    }
}
const TaskNavigator = createStackNavigator({
    HomeTask: {
        screen: HomeTask
    },
    NewTask: {
        screen: NewTask
    }
}, {
    initialRouteName: 'HomeTask',
    headerMode: 'none'
}); 
