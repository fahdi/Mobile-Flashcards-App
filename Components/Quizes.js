import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, Text, StyleSheet} from "react-native";
import Quiz from './ReusableComponents/Quiz';

class Quizes extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.id} Quiz`
    })

    state = {  }

    render() {
        return (
            <View style={styles.container}>
                <Quiz />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        fontFamily: 'monospace',
    }
})

const mapStateToProps = (state, ownProps) => {
        const title = ownProps.navigation.state.params.id;
        const Questions = state.deck.allDecks.find(v => v.title === title).questions;
        console.log(Questions);
    return{

    }
}
const mapDispatchToProps = (dispatch) => {
    return{

    }
}
export default connect( mapStateToProps, mapDispatchToProps )(Quizes);