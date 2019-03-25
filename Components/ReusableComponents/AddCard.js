import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";

class AddCard extends Component {
    state = {
        que: '',
        ans: '',
    }
    whenSubmit = () => {
        this.setState({ que: '', ans: ''})
    }
    render() {
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView>
                    <View style={styles.card}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>
                                New Card
                        </Text>
                        </View>
                        <View style={styles.semiContainer}>
                            <View style={styles.TextContainer}>
                                <TextInput
                                    placeholder="Enter Question"
                                    value={this.state.que}
                                    onChangeText={(value) => {this.setState({que: value})}}
                                />
                            </View>
                            <View style={styles.TextContainer}>
                                <TextInput
                                    placeholder="Enter Answer"
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
        borderColor: "#424242",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 2,
        width: 90,
        height: 30,
        alignItems: "center"
    }
})
export default AddCard;