import React from 'react';
import { View, ActivityIndicator, StyleSheet} from "react-native";
const Loader = () => {
    return (
        <View>
            <ActivityIndicator color="black" size="small" />
        </View>
    );
}

export default Loader;