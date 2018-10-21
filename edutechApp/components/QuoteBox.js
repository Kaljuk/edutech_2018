import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert,
    Image
} from "react-native";
import HashtagOverlay from './HashtagOverlay';

class QuoteBox extends Component {
    _onPress() {
        Alert.alert("Article pressed..")
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onPress}>
                <View style={styles.EventBox}>
                    
                    <View style={styles.imageContainer}>
                        <Image 
                            resizeMode={"cover"}
                            style={{ width: "100%", height: 220, opacity: 0.5}}
                            source={{uri: this.props.imageUrl }} 
                        />
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.author}>{this.props.author}</Text>
                    </View>
                    <HashtagOverlay tag="quote" />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default QuoteBox;

const styles = StyleSheet.create({
    EventBox: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        borderColor: 'orange',
        // borderTopWidth: 4,
        elevation: 2,
        marginTop: 15

    },
    imageContainer: {
        flex: 3,
        backgroundColor: '#000',
        padding: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        position: 'absolute',
        bottom: "32%",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontStyle: 'italic'
    },
    author: {
        fontSize: 16,
        fontWeight: '200',
        color: "white",
        position: 'absolute',
        bottom: "25%",
        right: "10%",

    },
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