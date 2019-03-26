import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";
import { connect } from 'react-redux';
import { ADD_CARD } from '../../Store/Actions/DeckActions';

class AddCard extends Component {
    state = {
        que: '',
        ans: '',
    }
    whenSubmit = () => {
        this.props.addCard(this.props.deck, {question: this.state.que, answer: this.state.ans});
        this.setState({ que: '', ans: ''})
        this.props.navigation.navigate("Deck", {id: this.props.deck.title})
    }
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.id
    })
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.card}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>
                                New Card
                        </Text>
                        </View>
                        <View style={styles.semiContainer}>
                            <View style={styles.TextContainer}>
                                <TextInput
                                    placeholder="Enter question"
                                    value={this.state.que}
                                    onChangeText={(value) => {this.setState({que: value})}}
                                />
                            </View>
                            <View style={styles.TextContainer}>
                                <TextInput
                                    placeholder="Enter answer like 'correct' or 'incorrect' "
                                    value={this.state.ans}
                                    onChangeText={(value) => {this.setState({ans: value})}}
                                />
                            </View>
                            <View style={styles.ButtonContainer}>
                                <TouchableOpacity onPress={this.whenSubmit}>
                                    <Text style={{ color: "white" }}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCard : (deck, cardobj) => dispatch(ADD_CARD(deck, cardobj)),
    }
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: 'black'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    card: {
        minHeight: 300,
        width: 350,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        elevation: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    semiContainer: {
        flexDirection: "column",
        minHeight: 105,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    TextContainer: {
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: 'black',
        minWidth: 110,
        width: 300,
        height: 40,
        justifyContent: "center"
    },
    ButtonContainer: {
        justifyContent: "center",
        backgroundColor: "black",
        borderColor: 'black',
        borderStyle: "solid",
        borderWidth: 5,
        borderRadius: 5,
        width: 150,
        height: 30,
        fontSize: 15,
        alignItems: "center"
    }
})

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.navigation.state.params.id;
    const deck = state.deck.allDecks.find(v => v.title === id)
    return {
        deck,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCard);