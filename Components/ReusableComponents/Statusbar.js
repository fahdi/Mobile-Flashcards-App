import React from 'react';
import {View, StatusBar} from "react-native";
const Statusbar = () => {
    return (
        <StatusBar 
        backgroundColor={'black'}
        barStyle={'dark-content'} 
        translucent={true}
        />
    );
}

export default Statusbar;