import React, { Component } from 'react';
import { View, StyleSheet, Text} from "react-native";
import DeckList from './ReusableComponents/DeckList';
import { connect } from 'react-redux';
import { Get_Deck } from '../Store/Actions/DeckActions';

class Decks extends Component {
    componentDidMount(){
        this.props.getAllDecks();
    }
    render() {
        const {allDecks} = this.props;
        return (
            <View style={styles.container}>
            <View style={styles.semiContainer}>
                {allDecks.lenght > 0 ? (allDecks.map(v => <DeckList title={v.title} num={v.questions.lenght} /> )
                ) : (<View><Text>No Decks avaiable.</Text></View>)}
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      maxHeight: 700,
      fontFamily: 'monospace',
    },
  });
  
  const mapStateToProps = ({deck}) => {
    return {
        allDecks: deck.allDecks,
    }
  }
   
  const mapDispatchToProps = (dispatch) => {
      return{
          getAllDecks: () => dispatch(Get_Deck()),
      }
  }
export default connect(mapStateToProps, mapDispatchToProps)(Decks);