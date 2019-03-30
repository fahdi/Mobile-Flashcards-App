import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import TabNavigator from './Components/Navigations/TabNavigator';
import { Provider } from "react-redux";
import store from "./Store";
import Statusbar from './Components/Statusbar';
import {SetNotifications} from "./Store/Actions/notiActions"
class App extends React.Component {
  whenPress = () => {
    this.setState({ showNav: true})
  }

  componentDidMount() {
      SetNotifications();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{
            backgroundColor: "black",
            height: 23,
          }}>
            <Statusbar />
          </View>
          <View style={{ flex: 2 }}>
            <TabNavigator />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'monospace',
  }
});

export default App;