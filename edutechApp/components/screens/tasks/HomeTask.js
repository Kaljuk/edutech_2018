import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from "react-native";
import Header from '../../Header';
import MyTask from '../../MyTask';

class HomeTask extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <Header title="Tasks"></Header>
                    <MyTask></MyTask>
                    <View style={{position: "absolute", marginTop: 200, marginLeft: 150}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewTask')} style={{ width: 60 }}>
                            <Image
                            style={{ width: 60, height: 60}}
                                source={{ uri: 'https://vignette.wikia.nocookie.net/i-shall-seal-the-heavens/images/2/2f/Plus.png/revision/latest?cb=20180221183139' }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 5, color: 'orange'}}>Add Task</Text>
                    </View>       
                </View>
            </ScrollView>
            );
    }
}


export default HomeTask;

