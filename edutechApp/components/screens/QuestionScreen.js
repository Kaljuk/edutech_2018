import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

/**
 * @typedef {Object} SubjectQuestion
 * @prop {String} text
 */
/**
 * @typedef {Object} Subject
 * @prop {String} subject - Question/ Option
 * @prop {[ SubjectQuestion ]} questions
 */

/**
 * @class
 * @argument {Object} questionnaires
 */
export default class QuestionScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            // Questions asked, with the answer data
            questionnaires: (this.props.questionnaires || []),
            // How many seconds did the user take to answer these
            // Question ID
            currentQuestionId: 0
        }

        // Bind functions
        this.chooseAnswer = this.chooseAnswer.bind(this);
    }

    chooseAnswer(answerId) {
        // this.setState({ currentQuestionId: (this.state.currentQuestionId || 0)+1 })
        log("Choosed an answer nr.", answerId);
        this.setState({ currentQuestionId: this.state.currentQuestionId+1 }, () => {
            // Done changing
            if (this.state.currentQuestionId >= this.state.questionnaires.length) {
                // this.props.navigation.navigate({ routeName: 'AfterQuestion', params: { cancel: true }});
                this.props.navigation.navigate({ routeName: 'AfterQuestion', params: { cancel: false }});
            }
        })
    }
 
    render() {
        // LimeGreen, AquaBlue, Purple
        let colors = ['#81b108', '#52b7bd', '#6d2963']
        // let customStyle = { backgroundColor: colors[Math.floor(Math.random()*colors.length)] };
        let customStyle = { backgroundColor: colors[Math.min(colors.length-1, this.state.currentQuestionId)] };

        let questionId = this.state.currentQuestionId;
        // Prevent X+1/X
        if (questionId >= this.state.questionnaires.length) {
            return (<View></View>)
        }
        let topic = (this.state.questionnaires[questionId] || []);

        log(this.state.questionnaires[0])
        let answers = (topic.answers || []).map( (q, k) => {
            return (
                <TouchableOpacity key={k} 
                    style={[ styles.questionBox, customStyle ]}
                    onPress={ () => {this.chooseAnswer(); colors.pop()} }
                >
                    <Text style={ styles.questionText }>
                        { q.text || "No Question" } 
                    </Text>
                </TouchableOpacity>
            )
        })
        log(questionId);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch'
              }}>
                {/* Question counter */}
                <View style={ styles.titleBox }>
                    <Text style={[ styles.titleText, styles.indexText ]}> 
                        {" "}{ questionId+1 || "X" }/{ this.state.questionnaires.length || "X" }{" "}
                    </Text>
                    <Text style={ styles.titleText }>{ topic.question }{"\n"}</Text>
                    <View style={ customStyle }><Text style={ [styles.subjectText] }> { topic.subject } </Text></View>
                </View>

                { answers }

                {/* Cancel the questions */}
                <View style={ styles.questionCancelBox }>
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('AfterQuestion', { cancel: true })}> 
                        <Text style={ styles.questionCancelText }>I'll answer later</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}


  
QuestionScreen.defaultProps = {
    questionnaires: [
        { 
            subject: "Art",
            question: 'Have you drawn anything new lately?',
            answers: [
                {
                    text: "Yes", 
                    productivity: -3, interest: 1
                }, { 
                    text: "No"
                }
            ]
        }, { 
            subject: "Chemistry",
            question: 'How do you feel about chemistry?',
            answers: [
                {
                    text: "Boring"
                }, { 
                    text: "Interesting,\nI do tests of my own"
                }, { 
                    text: "It's ok"
                }
            ]
        }, { 
            subject: "Personality",
            question: 'Finish the line:\n"If one door closes, ..."',
            answers: [
                {
                    text: "another one opens.", 
                    productivity: -3, interest: 1
                }, { 
                    text: "open a window.", productivity: 1, interest: 5
                }, { 
                    text: "just wait in the hallway.", productivity: 0, interest: -5
                }
            ]
        }
    ]
};

QuestionScreen.propTypes = {
    subject: PropTypes.string
}

const styles = StyleSheet.create({
    indexText:{
        backgroundColor: 'black',
        color: 'white'
    },
    titleBox: {
        // backgroundColor: "#445b75",
        position: "absolute",

        left : 0,
        right: 0,
        top: "6%",
        
        marginBottom: "6%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 24,
        color   : 'black'
    },
    subjectText: {
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 12, 
        color   : 'white'
    },
    questionBox: {
        marginTop: "5%", 
        height: "15%",

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
        //,backgroundColor: "#841584"
    },
    questionText: {
        position: "absolute",
        textAlignVertical: "center",

        top:0,
        bottom: 0,
        color: 'white',
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    questionCancelBox: {
        position: "absolute",

        left: 0,
        right: 0,
        bottom: "5%",
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionCancelText: {
        color: 'grey',
        textAlign : 'center',
        fontWeight: 'bold',
        fontSize: 14
    }
})