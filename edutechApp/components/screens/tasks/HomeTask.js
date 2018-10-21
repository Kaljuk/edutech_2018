import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Header from '../../Header';
import MyTask from '../../MyTask';
import Icon from 'react-native-vector-icons/Ionicons';

class HomeTask extends Component {
    render() {
        return (
            <ScrollView>
                <View >
                    <Header title="Tasks"></Header>
                    <View style={{ alignItems: "center", justifyContent: "center", marginTop: 100 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewTask')}>
                            <Text style={{fontSize: 68, fontWeight: '900', fontFamily: 'Roboto', color: '#444'}}>+</Text>
                           
                        </TouchableOpacity>
                        <Text style={{color: '#555', fontWeight: '400', marginTop: -5 }}>Add Task</Text>
                    </View>       
                    <MyTask></MyTask> 
                </View>
            </ScrollView>
            );
    }
}


export default HomeTask;

