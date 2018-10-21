import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
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
                    <TouchableHighlight style={styles.joinButton}>
                        <Text style={styles.joinButtonText}>JOIN</Text>
                    </TouchableHighlight>
                </View>

        );
    }
}

class RecommendedGroups extends Component {
    render() {
        return (
            <View style={{bottom: 0, width: "100%"}}>
                <View style={styles.listHeader}>
                    <Text style={styles.listHeaderTitle}>RECOMMENDATIONS</Text>
                </View>
                <FlatList
                    data={[
                        {key: 'TalTech'},
                        {key: 'University of Tartu'},
                    ]}
                    renderItem={({item}) => <ListItem value={item.key}></ListItem>}
                />
            </View>
        );
    }
}
export default RecommendedGroups;

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        backgroundColor: '#f5f5f5'
    },
    listHeader: {
        backgroundColor: '#eaeaea',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#e5e5e5'
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
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd'
    },
    joinButton: {
        alignItems: 'center',
        position: 'absolute',
        right: 30,
        top: 20,
        backgroundColor: 'orange',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    joinButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});