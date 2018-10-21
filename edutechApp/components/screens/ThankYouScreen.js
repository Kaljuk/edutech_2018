import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity, // Buttons

    View,
    Text, StyleSheet,

    Image, TouchableHighlight
} from 'react-native'

// LazyLogging
const log = console.log;



export default class ThankYouScreen extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        log("NavParams", this.props.navigation.state.params.cancel);
    }

    nextPage() {
        log("Go Home")
        this.props.navigation.navigate('Home');
    }

    render() {
        const feedBackMessages = [ 
            "Thank you for the feedback.",
            //"We're sad to hear that, but hopeful that you will find something more interesting",
            "We're happy to hear that!",
            "Wonderful!"
        ]

        const cancelText = "Talk to you later";

        const isCancel = this.props.navigation.state.params.cancel;
        const thankYouText = feedBackMessages[Math.floor(Math.random() * feedBackMessages.length)]
        const next = this.nextPage;
        
        return (
            <TouchableOpacity style={{ flex:1 }} onPress={ () => next()}>
                <View style={ styles.infoBox }>
                    <Text style={ styles.questionCancelText }>{ (isCancel && cancelText) || thankYouText }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

ThankYouScreen.defaultProps = {
    cancel: false
};

ThankYouScreen.propTypes = {
    cancel: PropTypes.bool
}


const styles = StyleSheet.create({
    infoBox: {
        position: "absolute",

        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        
        alignItems: 'center',
        justifyContent: 'center',
        
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
        
    },
    infoText: {
        color: 'grey',
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    questionCancelBox: {
        position: "absolute",

        left: 0,
        right: 0,
        bottom: "5%",
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionCancelText: {
        color: 'grey',
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 24
    }
});