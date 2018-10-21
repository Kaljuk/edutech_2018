import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableHighlight,
    ScrollView
} from "react-native";

class ListItem extends Component {
    render() {
        return (
            <ScrollView>
                    <View style={styles.listRow}>
                        <Image
                            style={{ width: 45, height: 45}}
                            source={{uri: this.props.picUri}}
                        />
                        <Text style={styles.item}>{this.props.value}</Text>
                        <TouchableHighlight style={styles.joinButton}>
                            <Text style={styles.joinButtonText}>JOIN</Text>
                        </TouchableHighlight>
                    </View>
            </ScrollView>

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
                        { key: 'TalTech', picUri: 'https://lh3.googleusercontent.com/bkYP_nijjwf2V1_iLnezWepkZQvKPQJI8_-OGkYZ5wCtBbBVfHzJI5UoZcTXSKEiPMw=s180-rw'},
                        { key: 'Tallinn University', picUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVtH1y-YEkPf_BXR9-2cnqLpKwIZY6zXVHVJia-QhOa1pgiQ4'}
                    ]}
                    renderItem={({item}) => <ListItem value={item.key} picUri={item.picUri} ></ListItem>}
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
        right: '7%',
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