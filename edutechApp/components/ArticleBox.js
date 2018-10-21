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

class ArticleBox extends Component {
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
                    <HashtagOverlay tag={this.props.tag} color="#fff" backgroundColor="rgba(0, 0, 0, 0.9)"/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default ArticleBox;

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
    }
});