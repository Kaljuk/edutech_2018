import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

class GroupSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search groups.."
                    placeholderTextColor="#777"
                    underlineColorAndroid={'transparent'} />
            </View>
        );
    }
}
export default GroupSearch;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eee',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    textInput: {
        height: 25,
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 2,
        color: '#333'

    }
});