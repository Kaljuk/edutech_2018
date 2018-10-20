import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class GroupSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>GroupSearch</Text>
            </View>
        );
    }
}
export default GroupSearch;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});