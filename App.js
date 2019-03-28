import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TabNavigator from './Components/Navigations/TabNavigator';
import { Provider } from "react-redux";
import store from "./Store";
import { Constants, Notifications, Permissions } from 'expo';
import Statusbar from './Components/Statusbar';

class App extends React.Component {
  state = { showNav: false }
  whenPress = () => {
    this.setState({ showNav: true })
  }
  /* componentDidMount() {
    this.localNotification();
  }
  localNotification = () => {
    const localNotification = {
      title: 'Reminder for study',
      body: "Seems like you didn't study whole day, open app study now.",
      ios: { sound: true },
      android: {
        channelId: 'reminder',
        color: 'grey',
      }
    };
    const schedulingOptions = {
      time: new Date(),
      repeat: 'minute',

    }
    Notifications.scheduleLocalNotificationAsync(
      localNotification, schedulingOptions
  );
  } */
  
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
          {this.state.showNav ? (<View style={{ flex: 2 }}>
            <TabNavigator />
          </View>) : (
              <View style={styles.welcomeContainer}>
                <View style={styles.welcome}>
                  <Image
                    style={{ width: 300, height: 300 }}
                    source={require('./Components/images/2.png')}
                  />
                  <Text style={styles.WelcomeText}>
                    Welcome To Flashcards App
                </Text>
                  <TouchableOpacity style={styles.buttonTouchable} onPress={this.whenPress}>
                    <Text style={styles.buttonText}> Click here to continue </Text>
                  </TouchableOpacity>
                </View>
              </View>)}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'monospace',
  },
  buttonTouchable: {
    display: 'flex',
    width: 200,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
  },
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: "center"
  },
  welcome: {
    minHeight: 400,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  WelcomeText: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
  }
});

export default App;