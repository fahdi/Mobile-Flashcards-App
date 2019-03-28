import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import { Delete_Deck } from '../../Store/Actions/DeckActions';
import Loader from './Loader';

class Deck extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.id,
        headerStyle: {
            height: 25,
          },
    })
    state = {
        noCards: false,
    }
    whenAddCard = () => {
        const navi = this.props.navigation;
        navi.navigate("Add Card", { id: navi.state.params.id })
    }
    whenStartQuiz = () => {
        if (this.props.specificDeck.questions.length !== 0) {
            const navi = this.props.navigation;
            navi.navigate("Quizes", { id: navi.state.params.id })
        }
        else { 
            this.setState({noCards: true})
        }
    }
    whenDelete = () => {
        this.props.delDeck(this.props.navigation.state.params.id)
        this.props.navigation.navigate("Decks")
    }
    render() {
        const { specificDeck, loader } = this.props;
        return (
            <View>
                {
                    loader ? (<Loader />) : (<Fragment>
                        {specificDeck ? (<View style={styles.container}>
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
                        {this.state.noCards && <View style={styles.showMessage}>
                            <TouchableOpacity onPress={() => this.setState({noCards: false})}>
                            <Text style={styles.showMessageText}>
                            Sorry, you can't take a quiz because there are no cards in the deck.
                            </Text> 
                            </TouchableOpacity>
                        </View>}
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
                </View>) : (<Loader />)}
                    </Fragment>)
                }
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        specificDeck: state.deck.indiDeck,
        loader: state.deck.loader_GET_DECK,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delDeck: (title) => dispatch(Delete_Deck(title)),
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 400,
        paddingTop: 15,
    },
    semiContainer: {
        flex: 1,
        justifyContent: "space-around",
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
        backgroundColor: "black",
        elevation: 1,
    },
    buttonText: {
        color: "white",
        fontSize: 15
    },
    showMessage: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#757575",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 5,
        width: 250,
        height: 50,
        backgroundColor: "#757575"
    },
    showMessageText: {
        color: "white",
        fontSize: 15
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(Deck);