import React from 'react';
import { View, Text, StyleSheet } from "react-native";
const Quiz = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.semiContainer}>

                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        minHeight: 400,
        width: 300,
        borderColor: "grey",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        elevation: 2,
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
})

export default Quiz;