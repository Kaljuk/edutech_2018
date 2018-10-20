import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import FeedBox from '../FeedBox';
import EventBox from '../EventBox';
import ArticleBox from '../ArticleBox';
import QuoteBox from '../QuoteBox'
import Header from '../Header';

class FeedScreen extends Component {
    render() {
        return (
            <View>
                <Header title="Feed"></Header>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <ArticleBox
                        title="Garage48 Edutechil sünnivad uued haridusrakendused "
                        imageUrl="https://p.ocdn.ee/40/i/2018/10/18/ptvicacd.zks.jpg"
                    />
                    <QuoteBox
                        title='"Education is the most powerful weapon which you can use to change the world."'
                        author="- Nelson Mandela"
                        imageUrl="http://fazewp.fazemediainc.netdna-cdn.com/cms/wp-content/uploads/2015/02/2007-nelson-mandela-600x300.jpg"
                    />
                    <EventBox
                        title="Fashion Flash Tallinn 2018!"
                        imageUrl="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/39762352_1043680182481202_1385387597345325056_o.png?_nc_cat=111&_nc_ht=scontent-arn2-1.xx&oh=38a7278b781cf2201013f75aa6ed6f60&oe=5C4B7FDF"
                    />
                    <EventBox
                        title="Garage48 Edutech Hackathon"
                        imageUrl="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/41514497_10155390449902142_5640440486658310144_o.jpg?_nc_cat=100&_nc_ht=scontent-arn2-1.xx&oh=093e8e4b2781febc46f1be5d11913afe&oe=5C5BB356"
                    />
                </ScrollView>
            </View>
        );
    }
}
export default FeedScreen;

const styles = StyleSheet.create({
    contentContainer: {
        paddingTop: 5,
        paddingBottom: 100,
        paddingHorizontal: 15
    }
});