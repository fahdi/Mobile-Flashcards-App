import React from 'react';
import { AntDesign } from '@expo/vector-icons'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from '../AddDeck';
import Decks from "../Decks";
const TabNavigator = createMaterialTopTabNavigator(
    {
        'Decks': {
            screen: Decks,
            navigationOptions: {
                tabBarIcon: () => <AntDesign name='folder1' size={25} color="white" />
            }
        },
        'Add Deck': {
            screen: AddDeck,
            navigationOptions: {
                tabBarIcon: () => <AntDesign name='addfolder' size={25} color="white" />,
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 14,
                color: 'white',
            },
            tabStyle: {
                width: 200,

            },
            style: {
                backgroundColor: 'black',
                borderRadius: 10,
            },
            indicatorStyle: {
                backgroundColor: 'orange',
            }
        },
    },
);

export default TabNavigation = createAppContainer(TabNavigator);
