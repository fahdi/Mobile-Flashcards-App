import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";
import { Add_Deck } from '../Store/Actions/DeckActions';

class AddDeck extends Component {
    state = {
        title: '',
    }
    whenChange = (value) => {
        this.setState({ title: value })
    }
    whenSubmit = () => {
        this.props.addDeck(this.state.title);
        this.setState({ title: '' });
    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView>
                    <View style={styles.card}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>
                                New Deck
                        </Text>
                        </View>
                        <View style={styles.semiContainer}>
                            <View style={styles.TextContainer}>
                                <TextInput
                                    placeholder="Enter title of new deck . ."
                                    value={this.state.title}
                                    onChangeText={this.whenChange}
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
        minHeight: 200,
        width: 310,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 5
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
        backgroundColor: "#424242",
        borderColor: '#424242',
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 2,
        width: 90,
        height: 30,
        alignItems: "center"
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        addDeck: (title) => dispatch(Add_Deck(title)),
    }
}

export default connect(null, mapDispatchToProps)(AddDeck);