import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput
} from "react-native";

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}></View>
                <View style={styles.whiteWrapper}>
                    <Text style={styles.logoText}>fillSkill</Text>
                    <TextInput placeholder="Email" style={styles.textInput} underlineColorAndroid={'transparent'}></TextInput>
                    <TextInput placeholder="Password" style={styles.textInput} secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
                    <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{color: 'white', fontWeight: '600'}}>LOG IN</Text>
                    </TouchableHighlight>
                    {/* <Text style={[styles.text]}>Forgot your password?</Text> */}
                </View>
                <View style={{justifyContent: 'flex-end', flex: 1}}>
                    <Text style={[styles.text, {marginBottom: 8}]}>Don't have an account? <Text style={{fontWeight: 'bold'}}>Create one</Text></Text>
                </View>
                
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f5f5f5"
    },
    whiteWrapper: {
        width: "90%",
        height: "70%",
        backgroundColor: 'white',
        paddingHorizontal: 40,//80,
        paddingVertical: "25%",
        elevation: 5
    },
    logoText: {
        textAlign: 'center',
        color: '#333',
        fontSize: 52,
        fontWeight: '600'
    },
    textInput: {
        borderBottomWidth: 0.5,
        marginTop: 5
    },
    button: {
        backgroundColor: 'orange',
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    text: {
        color: "#777",
        justifyContent: 'center',
    }

});