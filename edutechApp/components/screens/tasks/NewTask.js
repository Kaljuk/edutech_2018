import React, { Component } from "react";
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from "react-native";
import TaskSearch from '../../TaskSearch' ;


class ListItem extends Component {
    render() {
        return (
            <View style={styles.listRow}>
                <Text style={styles.item}>{this.props.value}</Text>
            </View>

        );
    }
}

class NewTask extends Component {
    render() {
        return (
            <View>
                <TaskSearch></TaskSearch>
                <FlatList
                    data={[
                        
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                        { key: '' },
                    ]}
                    renderItem={({ item }) => <ListItem value={item.key}>
                        <TouchableOpacity>

                        </TouchableOpacity>
                    </ListItem>}
                    />
            </View>
        );
    }
}
export default NewTask;

const styles = StyleSheet.create({
    item: {
        padding: 5,
        fontSize: 14,
        height: 40,
        color: '#555',
        backgroundColor: '#f5f5f5',
    },
    listHeader: {
        backgroundColor: '#eee',
        paddingHorizontal: 10,
    },
    listHeaderTitle: {
        fontSize: 17,
        fontWeight: '400'
    },
    listRow: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
        textInput: {
        height: 25,
        backgroundColor: '#eee',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: '#333'
    }
});
