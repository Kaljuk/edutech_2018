import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ListView
} from "react-native";
import Header from '../../Header';

class HomeTask extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(['Calculus', 'Geometry', 'Design', 'Photography']),
        };
    }
    render() {
        return (
            <View>
                <View>
                    <Header title="Tasks"></Header>
                </View>
                    <ListView 
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
                    <View style={{ marginLeft: 290, position:"absolute"}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('NewTask')} style={{ width: 60 }}>
                            <Image
                                style={{ width: 45, height: 45, marginTop: 545}}
                                source={{ uri: 'http://www.weareeclipse.com/resources/uploads/green-plus.png' }}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginTop: 5, fontSize: 9, fontWeight: "bold" }}>Add Task</Text>
                    </View>       
                </View>
            
            );
    }
}


export default HomeTask;

