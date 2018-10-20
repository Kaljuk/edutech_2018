import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

import Header from '../Header';
import MyGroups from "../MyGroups";
import GroupSearch from "../GroupSerarch";
import RecommendedGroups from "../RecommendedGroups";

class GroupsScreen extends Component {
    render() {
        return (
            <View style={{height: "100%", width: "100%"}}>
                <Header title="Groups"></Header>
                <GroupSearch />
                <MyGroups></MyGroups>
                <RecommendedGroups />
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