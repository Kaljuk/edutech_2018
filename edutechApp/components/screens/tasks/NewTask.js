import React, { Component } from "react";
import {
    View,
    Text,
    Image

} from "react-native";

class NewTask extends Component {
    render() {
        return (
            <View>
                <Image 
                    style = {{}}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Khan_Academy_logo.svg'}}
                />
            </View>
        );
    }
}
export default NewTask;

