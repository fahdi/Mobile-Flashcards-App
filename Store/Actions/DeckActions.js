import Types from "../const/Types";
import { AsyncStorage } from "react-native";
export const Add_Deck = (title) => {
    return dispatch => {
        AsyncStorage.setItem(title, JSON.stringify({ title: title, questions: [] }), (err, data) => {
            if (!err) {
                dispatch({ type: Types.addDeck, newDeck: { title: title, questions: [] } })
            }
            else{
                dispatch({type: Types.errorOfAddDecks})
            }
        })
    }
}
export const Get_Deck = () => {
    return dispatch => {
        AsyncStorage.getAllKeys().then(v => {
            AsyncStorage.multiGet(v , (err, data) => {
                if(!err){
                const TemArr = []
                data.map(d => {
                    let obj = JSON.parse(d[1])
                    TemArr.push(obj)
                })
                dispatch({ type: Types.getDecks, all_Decks: TemArr })
                }
                else{
                    dispatch({type: Types.errorOfGetDecks})
                }
            })
        })
    }
}
export const Delete_Deck = (key, id) => {
    return dispatch => {

    }
}

