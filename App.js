import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TabNavigator from './Components/Navigations/TabNavigator';

export default class App extends React.Component {
  state = {showNav: false}
  componentDidMount() {

  }
  whenPress = () => {
    this.setState({showNav: true})
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.showNav ? (<TabNavigator />) : (
          <View style={styles.welcome}>
          <Image
          style={{width: 300, height: 300}}
          source={require('./Components/images/2.png')}
        />
        <Text style={styles.WelcomeText}>
          Welcome To Flashcards App
        </Text>
        <TouchableOpacity style={styles.buttonTouchable} onPress={this.whenPress}>
          <Text style={styles.buttonText}> Click here to continue </Text>
        </TouchableOpacity>
        </View>)}
      </View>
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
    backgroundColor:'white', 
    borderRadius: 5, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color:'black', 
  },
  welcome: {
    flex:1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WelcomeText: {
    fontWeight: "bold",
    fontSize: 20,
    color: 'white',
    fontFamily: 'monospace',
  }
});
