import React, { Component } from 'react';
import { View, Text, StyleSheet} from "react-native";
import Decklist from './ReusableComponents/Decklist';

class Decks extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.semiConatiner}>
                <Decklist title="React Native" num="1" />
                <Decklist title="React" num="5" />
                <Decklist title="ES6" num="3" />
                <Decklist title="JavaScript" num="2" />
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