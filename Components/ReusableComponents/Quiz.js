import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const Quiz = (props) => {
    const { num, total, question, answer, incorrect, correct, showAns, selAns, next} = props;
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        {num}/{total}
                    </Text>
                </View>
                <View style={styles.semiContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.Text}>
                        {question}
                        </Text>
                    </View>
                    <View style={incorrect ? [styles.buttonContainer, styles.correct] : styles.buttonContainer}>
                        <TouchableOpacity onPress={() => selAns("incorrect", answer)}>
                            <Text style={styles.buttonText}>
                                Incorrect
                            </Text>
                        </TouchableOpacity>
                        </View>
                        <View style={correct ? [styles.buttonContainer, styles.correct] : styles.buttonContainer}>
                        <TouchableOpacity onPress={() => selAns("correct", answer)}>
                            <Text style={styles.buttonText}>
                                Correct
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.answerContainer}>
                        <TouchableOpacity onPress={() => showAns(answer)}>
                            <Text style={styles.answerText}>
                                Answer
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => next(num)} >
                            <Text style={styles.answerText}>
                                Next
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    card: {
        minHeight: 450,
        width: 300,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        elevation: 2,
        backgroundColor: "black"
    },
    semiContainer: {
        flexDirection: "column",
        minHeight: 105,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: 'white'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "white"
    },
    questionContainer: {
        minHeight: 100,
        maxHeight: 200,
        /* minWidth: 180,
        maxWidth: 280, */
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 2
    },
    Text: {
        color: "white",
        fontSize: 17,
        fontFamily: 'monospace',
        fontWeight: "bold",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 5,
        backgroundColor: "white",
        width: 150,
        height: 45,
        elevation: 1,
    },
    correct:{
        backgroundColor: "yellow"
    },
    buttonText:{
        color: "black",
        fontSize: 20,
        fontFamily: 'monospace',
    },
    answerContainer: {
        width: 260,
        height: 35,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    answerText:{
        color: "white",
        fontSize: 20,
        fontFamily: 'monospace',
        textDecorationLine: "underline"
    },
})

export default Quiz;