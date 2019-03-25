import Types from "../const/Types"

const initState = {
    allDecks: []
}

const deckReducer = (state = initState, action) => {
    switch(action.type){
        case Types.addDeck: 
        return state = {
            ...state,
            allDecks: [
                ...state.allDecks,
                action.newDeck,
            ]
        }
        case Types.getDecks:
        return state = {
            ...state,
            allDecks: action.all_Decks,
        }
        default: 
        return state;
    }
}
export default deckReducer;