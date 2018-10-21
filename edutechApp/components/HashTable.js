import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class HashTable extends Component {
    getRandomFontSize() {
        fontSizes = [14, 14, 26, 16, 16, 40]
        return fontSizes[Math.floor(Math.random() * fontSizes.length)];
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                    <Text style={{fontSize: this.getRandomFontSize()}}>#HashTable</Text>
                </Text>
            </View>
        );
    }
}
export default HashTable;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    }
});