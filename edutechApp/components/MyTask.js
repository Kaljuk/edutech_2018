import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ScrollView
} from "react-native";

class ListItem extends Component {
    render() {
        return (
            <View style={styles.listRow}>
                <Text style={styles.item}>{this.props.value}</Text>
            </View>

        );
    }
}

class MyTask extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginTop: 350 }}>
                    <View style={styles.listHeader}>
                        <Text style={styles.listHeaderTitle}>My Tasks</Text>
                    </View>
                    <FlatList
                        data={[
                            { key: 'Learn:    "Modern Arts in 21.st Century"' },
                            { key: 'Create:   "Visualize nature in a new way!"' },
                            { key: 'Project:  "Create Alum Crystals"' },
                            { key: 'Course:   "Modern Adobe Illustrator"' },
                        ]}
                        renderItem={({ item }) => <ListItem value={item.key}>
                            <TouchableOpacity>

                            </TouchableOpacity>
                        </ListItem>}
                    />
                </View>
            </ScrollView>

        );
    }
}
export default MyTask;

const styles = StyleSheet.create({
    item: {
        padding: 5,
        fontSize: 14,
        height: 40,
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
    }
});