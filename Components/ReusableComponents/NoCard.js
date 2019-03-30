import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const NoCard = () => {
    return (
        <View style={styles.container}>
        <View style={styles.semiContainer}>
            <Text style={styles.text}>
                Sorry, you can't take a quiz because there are no cards in the deck.
            </Text>
        </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },
    semiContainer: {
        display: "flex",
        width: 350,
        minWidth: 200,
        maxHeight: 300,
        height: 100,
        paddingRight: 2,
        paddingLeft: 2,
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "grey",
        borderRadius: 10,
        elevation: 1,
        lineHeight: 4,
    },
    text:{
        fontSize: 20,
    }
})
export default NoCard;