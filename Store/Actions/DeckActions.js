import Types from "../const/Types";
import { AsyncStorage } from "react-native";
export const Add_Deck = (title) => {
    return dispatch => {
        AsyncStorage.setItem(title, JSON.stringify({ title: title, questions: [] }), (err, data) => {
            if (!err) {
                dispatch({ type: Types.addDeck, newDeck: { title: title, questions: [] } })
            }
            else {
                dispatch({ type: Types.errorOfAddDeck })
            }
        })
    }
}
export const Get_Deck = () => {
    return dispatch => {
        AsyncStorage.getAllKeys().then(v => {
            AsyncStorage.multiGet(v, (err, data) => {
                if (!err) {
                    const TemArr = []
                    data.map(d => {
                        let obj = JSON.parse(d[1])
                        TemArr.push(obj)
                    })
                    dispatch({ type: Types.getDecks, all_Decks: TemArr })
                }
                else {
                    dispatch({ type: Types.errorOfGetDecks })
                }
            })
        })
    }
}

export const ADD_CARD = (deck, cardObj) => {
    return dispatch => {
        const Obj = { questions: [...deck.questions, cardObj] }
        AsyncStorage.mergeItem(deck.title, JSON.stringify(Obj))
        dispatch({ type: Types.addcard, newCard: { title: deck.title, questions: [...deck.questions, cardObj] } })
    }
}

export const Delete_Deck = (title) => {
    return dispatch => {
        AsyncStorage.removeItem(title, (err, data) => console.log(err,data))
        dispatch({type: Types.deleteDeck, id: title})
    }
}

