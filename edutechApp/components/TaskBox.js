import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import HashtagOverlay from "./HashtagOverlay";

class TaskBox extends Component {
    render() {
        return (
                <View style={[styles.container, {backgroundColor: this.props.backgroundColor}]}>
                    <Text style={[styles.taskTitle, {color: this.props.textColor}]}>{`[${this.props.prefix}] ${this.props.title}`}</Text>
                    <Icon name="ios-arrow-forward" size={36} color={this.props.textColor} style={styles.icon}></Icon>
                    <HashtagOverlay tag={this.props.tag} backgroundColor={ this.props.tagBgColor } color={this.props.tagColor}/>
                </View>
        );
    }
}
export default TaskBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        elevation: 2,
        flexDirection: 'row'
    },
    taskTitle: {
        fontWeight: '700',
        fontSize: 20
    },
    icon: {
        position: 'absolute',
        right: "8%",

    }
});