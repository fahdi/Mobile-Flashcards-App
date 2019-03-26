import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';

class Deck extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.id
    })
    whenAddCard = () => {
        const navi = this.props.navigation;
        navi.navigate("Add Card", { id: navi.state.params.id })
    }
    whenStartQuiz = () => {

    }
    whenDelete = () => {
        
    }
    render() {
        const {specificDeck} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.semiContainer}>
                <View >
                <Text style={styles.numOfCards}>
                    Total Cards: {specificDeck.questions.length}
                </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.whenStartQuiz}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.whenAddCard}>
                        <Text style={styles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.whenDelete}>
                        <Text style={styles.buttonText}>Delete Deck</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.navigation.state.params.id;
    specificDeck = state.deck.allDecks.find(v => v.title === id)
    return {
        specificDeck
    }
}
const styles = StyleSheet.create({
    container: {
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       minHeight: 400,
       paddingTop: 20
    },
    semiContainer: {
        flex: 1,
        justifyContent:"space-around",
        alignItems: "center",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "grey",
        minWidth: 300,
        minHeight: 200,
        borderRadius: 15,
        elevation: 1,
    },
    numOfCards: {
        fontSize: 20,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 5,
        width: 190,
        height: 45,
        backgroundColor: "black"
    },
    buttonText: {
        color: "white",
        fontSize: 15
    }
})
export default connect(mapStateToProps)(Deck);