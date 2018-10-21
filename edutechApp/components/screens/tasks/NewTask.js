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
                { key: 'Fashion Design' },       //CONTENT
                { key: 'Learn programming basics' },
                { key: 'Time management' },
                { key: 'Investing' },
                { key: 'JavaScript' },
                { key: 'Adobe Illustrator' },
                { key: 'How to run your own Business' },
                { key: 'Python' },
                { key: 'Data Learning' },
                { key: 'Literature' },
                { key: 'Modern Arts' },
                { key: 'History' },
                { key: 'WW2' },
                { key: 'Adolf Hitler' },
                { key: 'Inspiration' },
                { key: 'Microsoft' },
                { key: 'Java' },
                { key: 'React JS' },
                { key: 'AJAX' },
                { key: 'Social Studies' },
                { key: 'Confidence' },
                { key: 'How to improve your brain activity' },
                { key: 'How to sell' },
                { key: 'Public speech' },
                { key: 'How to use Google' },
                { key: 'How to use Condom' },
                { key: 'How to use Computer' },
                { key: 'How to use CMD' },
                { key: 'How to use paint' },
                { key: 'How to use MS Word' },
                { key: 'How to use PowePoint' },
                { key: 'How to play chess' },
                { key: 'Project- Make your own Slime' },
                { key: 'How to use table' },
                { key: 'How to use' },
 
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
