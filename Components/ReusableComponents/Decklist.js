import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const DeckList = (props) => {
    const { value, wp } = props;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => wp(value.title)}>
                <View style={styles.semiContainers}>
                    <Text style={styles.title}>
                        {value.title}
                    </Text>
                </View>
                <View style={styles.semiContainers}>
                    <Text style={styles.num}>
                        {value.questions.length} cards
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        backgroundColor: "white",
        borderWidth: 10,
        borderStyle: "solid",
        borderColor: '#424242',
        justifyContent: "space-around",
        alignItems: "center",
        height: 100,
        borderRadius: 5,
    },
    semiContainers: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: { color: "black", fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold' },
    num: { color: "black", fontSize: 20, fontFamily: 'monospace', },
})

export default DeckList;