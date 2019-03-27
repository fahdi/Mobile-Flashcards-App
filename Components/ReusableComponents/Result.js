import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Result = (props) => {
    const { score, total, backToDeck, reStart } = props;
    const per = Math.round(score / total * 100);
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Result
                    </Text>
                </View>
                <View style={styles.semiContainer}>
                    <View style={styles.resultContainer}>
                        <View style={styles.result}>
                            <View style={styles.r}>
                                <Text style={styles.Text}>
                                    Score
                                </Text>
                            </View>
                            <View style={styles.r1}>
                                <Text style={{color: "white"}}>
                                    {score}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.result}>
                            <View style={styles.r}>
                                <Text style={styles.Text}>
                                    Percentage
                                </Text>
                            </View>
                            <View style={styles.r1}>
                                <Text style={{color: "white"}}>
                                    {per}%
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonMainContainer}>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={backToDeck}>
                                <Text style={styles.buttonText}>
                                    Back to deck
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={reStart}>
                                <Text style={styles.buttonText}>
                                    Restart Quiz
                                </Text>
                            </TouchableOpacity>
                        </View>
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
        minHeight: 350,
        width: 300,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        elevation: 2,
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
        borderBottomColor: 'grey'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "black"
    },
    resultContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 280,
        height: 120,
    },
    result: {
        display: "flex",
        width: 120,
        height: 120,
        justifyContent: "center",
        backgroundColor: "black",
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
    },
    r: {
        display: "flex",
        borderBottomColor: "white",
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 40,
        alignItems: 'center'
    },
    r1: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        height: 80
    },
    Text: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold"
    },
    buttonMainContainer: {
        display: "flex",
        justifyContent: "space-between",
        height: 80,
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 5,
        backgroundColor: "black",
        width: 130,
        height: 35,
        elevation: 1,
    },
    buttonText: {
        color: "white",
    },
})

export default Result;