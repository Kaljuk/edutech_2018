import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback, TouchableHighlight,
    Linking,
    Alert,
    Image
} from "react-native";


class EventBox extends Component {
    constructor(props) {
        super(props);
        this.goToLink = this.goToLink.bind(this);

        this.link = ((this.props || {}).link || null);
    }
    goToLink() {
        const url = this.link || "https://www.facebook.com/events/388931024971632/";
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    _onPress() {
        // Alert.alert("Component pressed..");
        console.log("Bump");
        this.goToLink();
    }
    render() {
        return (
            // <TouchableWithoutFeedback onPress={() => this._onPress}>
            <TouchableWithoutFeedback onPress={() => this._onPress()}>
                <View style={styles.EventBox}>
                    <View style={styles.imageContainer}>
                        <Image 
                            resizeMode={"cover"}
                            style={{ width: "100%", height: 200 }}
                            source={{uri: this.props.imageUrl }} 
                        />
                    </View>
                    <View style={styles.headerContainer}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateDayNumber}>21</Text>
                            <Text style={styles.dateMonthName}>OCT</Text>
                        </View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{this.props.title}</Text>
                        </View>
                    </View>
                    
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
    dateContainer: {
        flex: 1,
        // backgroundColor: 'pink',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 3,
        paddingHorizontal: 5
    },
    dateDayNumber: {
        fontSize: 22,
        // color: 'orange'
    },
    dateMonthName: {
        fontSize: 12,
        paddingBottom: 5
        // color: 'orange'
    },
    titleContainer: {
        flex: 7,
        // backgroundColor: 'orange',
        paddingLeft: 15
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#444'
    },
});