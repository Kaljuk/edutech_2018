import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import Header from '../Header';
import MyGroups from "../MyGroups";

class GroupsScreen extends Component {
    render() {
        return (
            <View>
                <Header title="Groups"></Header>
                <MyGroups></MyGroups>
            </View>
        );
    }
}
export default GroupsScreen;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});