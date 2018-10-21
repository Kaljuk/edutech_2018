import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
} from "react-native";

import TaskBox from './TaskBox';

class MyTask extends Component {
    render() {
        state = { searchTerm: "" };
        return (
            <View>
                <View style={styles.currentTasksContainer}>
                    <Text style={{fontSize: 24, fontWeight: '600', color: "#444"}}>Current Tasks</Text>
                </View>
                <ScrollView contentContainerStyle={{padding: 20, backgroundColor: '#f2f2f2'}}>
                    <TaskBox 
                        title="Learning Adobe Illustrator" 
                        prefix="Vector Art"
                        textColor="white"
                        backgroundColor="#ff8c19"
                        tag="design"
                        tagColor="#fff"
                        tagBgColor="rgb(234, 129, 23)"
                    />
                    <TaskBox 
                        title="How to get started in Fashion Design" 
                        prefix="Fashion"
                        textColor="white"
                        backgroundColor="#333"
                        tag="design"
                        tagColor="#222"
                        tagBgColor="white"
                    />
                </ScrollView>
            </View>

        );
    }
}
export default MyTask;



const styles = StyleSheet.create({
    currentTasksContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#ededed',
        marginTop: 0
    }
});