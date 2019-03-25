import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

const DeckList = (props) => {
    const {title, num} = props;
    whenPress = () => {

    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this.whenPress}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.num}>{num} cards </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        backgroundColor: "white",
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#424242',
        justifyContent: "space-around",
        alignItems: "center", 
        height: 100,
    },
    title: { color: "black", fontSize: 20, fontFamily: 'monospace',fontWeight: 'bold'},
    num: { color: "black", fontSize: 20, fontFamily: 'monospace',},
})

export default DeckList;