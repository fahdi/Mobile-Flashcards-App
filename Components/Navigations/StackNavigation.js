import React from 'react';
import { StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { createStackNavigator } from 'react-navigation';
import Deck from '../ReusableComponents/Deck';
import AddCard from '../ReusableComponents/AddCard';
import Decks from "../Decks"
import Quizes from '../Quizes';
const StackNavigation = createStackNavigator(
    {   'Decks': {
        screen: Decks,
        navigationOptions: {
            header: null
        }
    },
        Deck: {
            screen: Deck,
            navigationOptions: {
                headerStyle: {
                    height: 30,
                  },
            }
        },
        'Add Card': {
            screen: AddCard,
        },
        'Quizes': {
            screen: Quizes,
        },
    },
);

const styles = StyleSheet.create({
    button: {
        width: 120,
        margin: 20,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
    }
})
export default StackNavigation;
