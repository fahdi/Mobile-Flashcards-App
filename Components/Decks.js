import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import DeckList from './ReusableComponents/DeckList';
import { connect } from 'react-redux';
import { Get_Deck } from '../Store/Actions/DeckActions';

class Decks extends Component {
    componentDidMount() {
        this.props.getAllDecks();
    }
    whenPress = (title) => {
        this.props.navigation.navigate("Deck", { id: title})
    }
    render() {
        const { allDecks } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.semiContainer}>
                    {allDecks.length > 0 ? (<FlatList
                        data={allDecks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (<DeckList value={item} wp={this.whenPress}/>)
                        }}
                    />) : (<View><Text>No Decks avaiable.</Text></View>)}
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: "space-around",
        alignItems: 'center',
        maxHeight: 700,
        fontFamily: 'monospace',
    },
});

const mapStateToProps = ({ deck }) => {
    return {
        allDecks: deck.allDecks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDecks: () => dispatch(Get_Deck()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Decks);