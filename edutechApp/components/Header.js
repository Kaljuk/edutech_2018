import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.logo}>{this.props.title}</Text>
            </View>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: "#f2f2f2",
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2
        

    },
    logo: {
        fontSize: 24,
        color: '#444',
        fontWeight: 'bold'
    }
});