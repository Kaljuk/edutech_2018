import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import HashTable from "../HashTable";

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.profileWrapper}>
                <View style={styles.coverPhoto}>
                <Image 
                            resizeMode={"cover"}
                            style={{ width: "100%", height: 200 }}
                            source={{uri: "https://cdn.shopify.com/s/files/1/1698/6547/files/starcatalog_600x600.jpg?v=1511346010" }} 
                        />
                </View>
                <View style={styles.profilePictureContainer}>
                    <View style={{borderWidth: 5, borderColor: '#f2f2f2', borderRadius: 5}}>
                    <Image
                            style={{ width: 100, height: 100 }}
                            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                    />
                    </View>
                </View>
                <View style={styles.personalInformation}>
                    <Text style={styles.personName}>Linda</Text>
                    <View style={styles.personBio}>
                            <Text style= {styles.personBioText}>Hey there!{"\n"} I'm a demo profile created during the Garage48 EduTech Hackathon.</Text>
                    </View>
                </View>
                <HashTable />
            </View>
        );
    }
}
export default ProfileScreen;

const styles = StyleSheet.create({
    profileWrapper: {
        backgroundColor: '#f2f2f2', 
        flex: 1
    },
    coverPhoto: {
        position: 'absolute',
        height: 200,
        width: "100%",
        backgroundColor: 'skyblue',
        top: 24,
        elevation: 3
    },
    profilePictureContainer: {
        alignItems: 'center',
        marginTop: 150,
        elevation: 3
    },
    personalInformation: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    personName: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    personBio: {
        marginTop: 5,
        width: "80%",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#cfcfcf',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: '#f1f1f1'
    },
    personBioText: {
        fontStyle: 'italic',
        color: '#666',
        fontSize: 13,
        fontFamily: 'monospace',
        textAlign: 'center'
    }
});