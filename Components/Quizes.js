import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import Quiz from './ReusableComponents/Quiz';

class Quizes extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.id} Quiz`
    })

    state = { 
        incorrect: false, 
        correct: false,
        lastQuestion: false,
        score: 0,
        questionNumber: 0,
    }
    selectedAnswer = (selectedAnswer, answer,) => {
        if(this.state.incorrect || this.state.correct){
            return
        }
        else if(selectedAnswer === answer){
            this.setState({[selectedAnswer] : true, score: this.state.score+1})
        }
        else{
            this.setState({[selectedAnswer] : true})
        } 
    }
    next = (quenum) => {
        console.log(quenum)
         if(quenum === this.props.Questions.length){
            this.setState({lastQuestion: true, incorrect: false, correct: false})
        }
        else{
            this.setState({questionNumber: this.state.questionNumber+1, incorrect: false, correct: false})
        }  
    }
    showAnswer = (answer) => {
        if(this.state.incorrect || this.state.correct){
            return
        }
        else if(answer === "correct"){
            this.setState({correct: true})
        }
        else if(answer === "incorrect"){
            this.setState({incorrect: true})
        }
    }
    render() {
        const {questionNumber, incorrect, correct} = this.state;
        const {Questions} = this.props;
        return (
            <View style={styles.container}>
                {this.state.lastQuestion ? (
                <View>
                <Text>No more Questions {this.state.score}</Text>
                </View>
                ) : (
                <Quiz 
                num={questionNumber+1} 
                total={Questions.length} 
                question={Questions[questionNumber].question} 
                answer={Questions[questionNumber].answer}
                incorrect={incorrect}
                correct={correct}
                showAns={this.showAnswer}
                selAns={this.selectedAnswer}
                next={this.next}
                />)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    }
})

const mapStateToProps = (state, ownProps) => {
        const title = ownProps.navigation.state.params.id;
        const Questions = state.deck.allDecks.find(v => v.title === title).questions;
    return{
        Questions
    }
}
const mapDispatchToProps = (dispatch) => {
    return{

    }
}
export default connect( mapStateToProps, mapDispatchToProps )(Quizes);