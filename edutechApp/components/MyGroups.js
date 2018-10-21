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
                    style={{width:45, height: 45}}
                    source={{ uri: this.props.picUri}}
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
                        { key: 'Garage48', picUri: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/28279763_10154994914897142_7253474065106605733_n.png?_nc_cat=103&_nc_ht=scontent-arn2-1.xx&oh=c0a46acf121e1d63f3635e3a9174a3f3&oe=5C8577F3"},
                        { key: 'Innove', picUri: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/1653362_706951026054806_4181088292662781757_n.jpg?_nc_cat=111&_nc_ht=scontent-arn2-1.xx&oh=59b4c6971194f23b62fdf42813d98b3c&oe=5C4923A6"},
                        { key: 'Lingvist', picUri: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/41530660_2142935735924050_7958619187406962688_n.png?_nc_cat=110&_nc_ht=scontent-arn2-1.xx&oh=c0526946039ea93abcc57dab8cc88bc0&oe=5C4879DB"},
                        { key: 'Artsper', picUri: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/22046598_1539887352716394_2092372097483331904_n.jpg?_nc_cat=1&_nc_ht=scontent-arn2-1.xx&oh=cd98ba1278dd1754be4c18803767f8a1&oe=5C55D76E"},
                        { key: 'Medium', picUri: "https://cdn-images-1.medium.com/max/800/1*NDlCgtLQtFSC5hDmP802eQ.png"},
                        { key: 'TEBO', picUri:'https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/17155399_1255418957845510_1673204046561710634_n.png?_nc_cat=106&_nc_ht=scontent-arn2-1.xx&oh=9a552c76341f6d2ecd2ea84ad2ea4495&oe=5C485A1D'},
                        { key: 'KUMU', picUri: 'https://kumu.ekm.ee/wp-content/uploads/sites/7/2014/11/kumu-logo.jpg'}
                    ]}
                    renderItem={({item}) => <ListItem value={item.key} picUri={item.picUri}></ListItem>}
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
        backgroundColor: '#eaeaea',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: '#e5e5e5'
    },
    listHeaderTitle: {
        fontSize: 14,
        fontWeight: '400',
        paddingLeft: 5
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