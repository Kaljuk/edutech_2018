import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    TouchableHighlight
} from "react-native";

class ListItem extends Component {
    render() {
        return (
                <View style={styles.listRow}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    <Text style={styles.item}>{this.props.value}</Text>
                </View>

        );
    }
}

class MyGroups extends Component {
    render() {
        return (
            <ScrollView style={{marginTop: 10}}>
                <View style={styles.listHeader}>
                    <Text style={styles.listHeaderTitle}>MY GROUPS</Text>
                </View>
                <FlatList   
                    data={[
                        {key: 'Garage48'},
                        {key: 'Innove'},
                        {key: 'Artsper'},
                        {key: 'RoboTex'},
                    ]}
                    renderItem={({item}) => <ListItem value={item.key}></ListItem>}
                />
            </ScrollView>
        );
    }
}
export default MyGroups;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: '#f5f5f5'
    },
    listHeader: {
        backgroundColor: '#eee',
        paddingHorizontal: 10,
    },
    listHeaderTitle: {
        fontSize: 14,
        fontWeight: '400'
    },
    listRow: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 1
    }
});