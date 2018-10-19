import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class FeedBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>FeedBox</Text>
            </View>
        );
    }
}
export default FeedBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});