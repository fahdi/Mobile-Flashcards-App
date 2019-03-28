import React from 'react';
import { AntDesign } from '@expo/vector-icons'
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import AddDeck from '../AddDeck';
import StackNavigation from './StackNavigation';
const TabNavigator = createMaterialTopTabNavigator(
    {   'Decks' : StackNavigation,
        'Add Deck': AddDeck,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: () => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === 'Decks') {
              iconName = `folder1`;
            }
            else if (routeName === "Add Deck") {
                iconName = `addfolder`;
            }
            return <AntDesign name={iconName} size={25} color="white" />;
          },
        }),
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
