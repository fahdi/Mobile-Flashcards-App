import React, { Component } from 'react';
import { View, Text, StyleSheet} from "react-native";
import DeckList from './ReusableComponents/DeckList';

class Decks extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.semiContainer}>
                <DeckList title="React Native" num="1" />
                <DeckList title="React" num="5" />
                <DeckList title="ES6" num="3" />
                <DeckList title="JavaScript" num="2" />
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      maxHeight: 700,
      fontFamily: 'monospace',
    },
  });
  
export default Decks;