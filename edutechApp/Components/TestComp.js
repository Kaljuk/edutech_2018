import React, { Component } from 'react';
import { View, Text } from 'react-native';


class TestComp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const MainText = (
            <Text>
                Sisukas Text
            </Text>
        );
        //
        return (
            <View>
                { MainText }
            </View>
        )
    }
}



export default TestComp;