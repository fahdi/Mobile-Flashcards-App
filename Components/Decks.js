import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from "react-native";
import DeckList from './ReusableComponents/DeckList';
import { connect } from 'react-redux';
import { Get_All_Decks, Get_Deck } from '../Store/Actions/DeckActions';
import Loader from './ReusableComponents/Loader';

class Decks extends Component {
    componentDidMount() {
        this.props.getAllDecks();
    }
    whenPress = (title) => {
        this.props.navigation.navigate("Deck", { id: title })
        this.props.getDeck(title);
    }
    render() {
        const { allDecks, loader } = this.props;
        return (
            <View style={styles.container}>
                {loader ? (<Loader />) : (<View style={styles.semiContainer}>
                    {allDecks.length > 0 ? (<FlatList
                        data={allDecks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => {
                            return (<DeckList value={item} wp={this.whenPress} />)
                        }}
                    />) : (<View><Text>No Decks avaiable.</Text></View>)}
                </View>)}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
        justifyContent: "space-around",
        alignItems: 'center',
        maxHeight: 700,
        fontFamily: 'monospace',
    },
});

const mapStateToProps = ({ deck }) => {
    return {
        allDecks: deck.allDecks,
        loader: deck.loader_GET_DECKS,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDecks: () => dispatch(Get_All_Decks()),
        getDeck: (title) => dispatch(Get_Deck(title)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Decks);