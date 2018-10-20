import React, { Component } from 'react';
import {
    Button, TouchableOpacity, // Buttons


    View,
    Text, StyleSheet,

    Image, TouchableHighlight
} from 'react-native'

// LazyLogging
const log = console.log;

/*
    - Possible values -
    Interest - How interested is the student in this subject?
    Productivity - How well is the student obtaining the data aka learning?
    
*/
// Temp, hardcoded static/filler data
const temp = {
    questions: [
        { text: "I'm bored in class", productivity: -3, interest: 1 },
        { text: "I'd like to know more about this subject", productivity: 1, interest: 5}
    ]
}

export default class QuestionScreen extends Component {
    constructor(props) {
        super();
        this.state = {
            // Questions asked, with the answer data
            questions: temp.questions.map( (q) => {
                q.checked = false;
                return q;
            }),
            // How many seconds did the user take to answer these
            answerTime: 0,
            selectedQuestions: []
        }
    }

    selectedQuestion(q, id, wasChecked) {
        log(`${id}. ${q} was${wasChecked?"n't":''} checked`);
        /*this.setState({ 
            'questions': this.state.questions.map( () => {

            }) 
        });*/
    }

    render() {
        const questions = [...temp.questions || {}]
        const questionButtons = this.state.questions.map( (q, k) => {
            return (
                <TouchableOpacity key={k} 
                    style={ styles.questionBox }  
                    
                    // title={ q.text || "No Question" } 
                    onPress={() => this.selectedQuestion(q.text, k, q.checked)}
                >
                    <Text style={ styles.questionText }>
                        { q.text || "No Question" } 
                    </Text>
                </TouchableOpacity>
            )
        })

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch'
              }}>
                <Text style={ styles.titleText }>Heres the questioin</Text>
                { questionButtons }

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')} style={{backgroundColor: 'red', width: 50 }}> 
                <Image
                    style={{ width: 50, height: 50, marginTop: 20 }}
                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
                </TouchableHighlight>
                    
            </View>
        )
    }
}


const styles = StyleSheet.create({
    titleText: {
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 18,

        color: 'black'
    },
    questionBox: {
        marginTop:10, 
        height: "15%",

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        backgroundColor: "#841584"
    },
    questionText: {
        
        color: 'white',
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 18,

    }
})