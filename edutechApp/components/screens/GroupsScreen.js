import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import Header from '../Header';

class GroupsScreen extends Component {
    render() {
        return (
            <View>
                <Header title="Groups"></Header>
                <View style={styles.container}>
            
                </View>
            </View>
        );
    }
}
export default GroupsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});