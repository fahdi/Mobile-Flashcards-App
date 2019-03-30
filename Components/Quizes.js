import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from "react-native";
import Quiz from './ReusableComponents/Quiz';
import Result from './ReusableComponents/Result';
import NoCard from './ReusableComponents/NoCard';
import { SaveQuizDate } from '../Store/Actions/notiActions';

class Quizes extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.id} Quiz`,
        headerStyle: {
            height: 30,
        },
    })

    state = {
        incorrect: false,
        correct: false,
        lastQuestion: false,
        score: 0,
        questionNumber: 0,
        showAnswer: false,
        showAnswerFlag: true,
    }
    
    componentDidMount(){
        this.props.saveQuizDate();
    }

    selectedAnswer = (selectedAnswer, answer, ) => {
        console.log(answer)
        if (this.state.incorrect || this.state.correct) {
            return
        }
        else if (selectedAnswer === "correct") {
            this.setState({ [selectedAnswer]: true, score: this.state.score + 1 })
        }
        else {
            this.setState({ [selectedAnswer]: true })
        }
    }
    next = (quenum) => {
        console.log(this.state.score)
        if (quenum === this.props.Questions.length) {
            this.setState({ lastQuestion: true, incorrect: false, correct: false, showAnswer: false, showAnswerFlag: true })
        }
        else {
            this.setState({
                questionNumber: this.state.questionNumber + 1, incorrect: false, correct: false,
                showAnswer: false, showAnswerFlag: true
            })
        }
    }
    showAnswer = () => {
        this.setState({ showAnswer: true, showAnswerFlag: false })
    }
    whenBackToStart = () => {
        const navi = this.props.navigation;
        navi.navigate("Deck", { id: navi.state.params.id })
    }
    whenReStart = () => {
        this.setState({
            incorrect: false,
            correct: false,
            lastQuestion: false,
            score: 0,
            questionNumber: 0,
        })
    }
    render() {
        const { questionNumber, incorrect, correct } = this.state;
        const { Questions } = this.props;
        return (
            <View style={styles.container}>
                {this.state.lastQuestion ? (
                    <Result
                        score={this.state.score}
                        total={Questions.length}
                        reStart={this.whenReStart}
                        backToDeck={this.whenBackToStart}
                    />
                ) : (<Fragment>{Questions.length > 0 ? (<Quiz
                    num={questionNumber + 1}
                    total={Questions.length}
                    question={Questions[questionNumber].question}
                    answer={Questions[questionNumber].answer}
                    incorrect={incorrect}
                    correct={correct}
                    showAns={this.showAnswer}
                    selAns={this.selectedAnswer}
                    next={this.next}
                    showAnswer={this.state.showAnswer}
                    showAnswerFlag={this.state.showAnswerFlag}
                />) : (<NoCard />)}</Fragment>)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    }
})

const mapStateToProps = (state) => {
    return {
        Questions: state.deck.indiDeck.questions
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        saveQuizDate: () =>  dispatch(SaveQuizDate()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quizes);