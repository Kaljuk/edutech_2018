import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

class TaskSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search tasks.."
                    placeholderTextColor="#777"
                    underlineColorAndroid={'transparent'}
                    onChangeText = {this.handleSearch} 
                    />
            </View>
        )
    }
}
export default TaskSearch;

const styles = StyleSheet.create({
    container: {
        marginTop: 35,
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    textInput: {
        height: 35,
        backgroundColor: '#eee',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: '#333'

    }
});