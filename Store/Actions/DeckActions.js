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
export const Get_All_Decks = () => {
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

export const Get_Deck = (title) => {
    return dispatch => {
        AsyncStorage.getItem(title, (err, data) => {
            if(!err){
                const dataObj = JSON.parse(data)
                dispatch({type: Types.getDeck, indi_Deck: dataObj})
            }
            else{
                dispatch({type: Types.errorOfGetDeck})
            }
        })
    }
}

export const ADD_CARD = (deck, cardObj) => {
    return dispatch => {
        const Obj = { questions: [...deck.questions, cardObj] }
        AsyncStorage.mergeItem(deck.title, JSON.stringify(Obj), (err) => {
            if(!err){
                dispatch({ type: Types.addcard, newCard: { title: deck.title, questions: [...deck.questions, cardObj] } })
            }
            else{ 
                dispatch({type: Types.errorOfAddCard})
            }
        })
    }
}

export const Delete_Deck = (title) => {
    return dispatch => {
        AsyncStorage.removeItem(title, (err) => {
            if(!err){
                dispatch({type: Types.deleteDeck, id: title})
            }
            else{
                dispatch({type: Types.errorOfDeleteDeck})
            }
        })
    }
}
