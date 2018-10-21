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
                    <EventBox
                        title="Fashion Flash Tallinn 2018!"
                        tag="fashion"
                        imageUrl="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/39762352_1043680182481202_1385387597345325056_o.png?_nc_cat=111&_nc_ht=scontent-arn2-1.xx&oh=38a7278b781cf2201013f75aa6ed6f60&oe=5C4B7FDF"
                    />
                    <ArticleBox
                        title="Garage48 Edutechil sünnivad uued haridusrakendused "
                        tag="education"
                        imageUrl="https://p.ocdn.ee/40/i/2018/10/18/ptvicacd.zks.jpg"
                    />
                    <QuoteBox
                        title='"Education is the most powerful weapon which you can use to change the world."'
                        author="- Nelson Mandela"
                        imageUrl="http://fazewp.fazemediainc.netdna-cdn.com/cms/wp-content/uploads/2015/02/2007-nelson-mandela-600x300.jpg"
                    />
                    <ArticleBox
                        title="Going to Paris. What Van Gogh’s arrival in Paris can teach us about timing."
                        tag="design"
                        imageUrl="https://cdn-images-1.medium.com/max/800/1*lZQONFo2wMaw0_isHIqHNA.jpeg"
                    />
                    <EventBox
                        title={`Game Design: Art & Aesthetics`}
                        tag="gamedev"
                        imageUrl={`https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/21740058_499056753804625_8445565050551920290_n.jpg?_nc_cat=105&_nc_ht=scontent-arn2-1.xx&oh=8f343f3d3a0fda7c9517800596f02364&oe=5C52DB7B`}
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