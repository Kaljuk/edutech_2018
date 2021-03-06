import React, { Component } from "react";
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TextInput
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

class NewTask extends Component {
    constructor(props){
    super(props);

    this.state = {
        query: "",      
        data :
                [
                { key: 'Photography' },       //CONTENT
                { key: 'Modern Art' },
                { key: 'Time management' },
                { key: 'Investing' },
                { key: 'Make your own WebSite!' },
                { key: 'Adobe PhotoShop' },
                { key: 'How to run your own Business' },
                { key: 'Art museums to visit!' },
                { key: 'Medieval Art' },
                { key: 'Literature' },
                { key: 'Javascript' },
            ]};
}
    handleSearch = (text) => {
        console.log(text)
        this.setState({ query: text})
    }

    render() {
        let searchtext = this.state.query.toLowerCase();
        let filteredData = this.state.data.filter((e)=>{
            return(e.key.toLowerCase().includes(searchtext))
        });
        console.log("aa",filteredData);
        return (
            <View>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search for tasks..."
                    placeholderTextColor="#777"
                    underlineColorAndroid={'transparent'}
                    onChangeText={this.handleSearch}
                />
                <FlatList data={filteredData}
                    renderItem={({ item }) => <ListItem key = {item.key} value={item.key}>
                    </ListItem>}
                    keyExtractor= {item => item.key}
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
        height: 55,
        backgroundColor: '#eee',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        color: '#333',  
        marginTop: 20,
    },
});
