import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert,
    Image
} from "react-native";
import { LinearGradient } from 'expo';

class EventBox extends Component {
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
                            style={{ width: "100%", height: 230 }}
                            source={{uri: this.props.imageUrl }} 
                        />
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={styles.hashtag}><Text style={styles.hashtagText}>#education</Text></View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default EventBox;

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
        // backgroundColor: 'skyblue',
        padding: 0,
    },
    headerContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 15,
        paddingVertical: 10
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