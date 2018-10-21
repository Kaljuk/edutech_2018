import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HashtagOverlay extends Component {
    render() {
        return (
            <View style={styles.hashtag}><Text style={styles.hashtagText}>{"#" + this.props.tag}</Text></View>
        );
    }
}
export default HashtagOverlay;

const styles = StyleSheet.create({
    hashtag: {
        position: "absolute",
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        paddingHorizontal: 11,
        paddingVertical: 5,
        borderBottomLeftRadius: 10
    },
    hashtagText: {
        color: 'white',
        fontWeight: '900',
        fontFamily: 'notoserif',
        fontSize: 14
    }
});