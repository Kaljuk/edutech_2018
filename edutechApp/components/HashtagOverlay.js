import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HashtagOverlay extends Component {
    render() {
        return (
            <View style={[styles.hashtag, {backgroundColor: this.props.backgroundColor}]}><Text style={[styles.hashtagText, {color: this.props.color}]}>{"#" + this.props.tag}</Text></View>
        );
    }
}
export default HashtagOverlay;

const styles = StyleSheet.create({
    hashtag: {
        position: "absolute",
        right: 0,
        top: 0,
        paddingHorizontal: 11,
        paddingVertical: 5,
        borderBottomLeftRadius: 10
    },
    hashtagText: {
        fontWeight: '900',
        fontFamily: 'notoserif',
        fontSize: 14
    }
});