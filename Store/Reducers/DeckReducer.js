import Types from "../const/Types"

const initState = {
    allDecks: [],
}

const deckReducer = (state = initState, action) => {
    switch (action.type) {
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
        case Types.addcard:
            const TemArr = [...state.allDecks];
            const index = TemArr.findIndex(v => v.title === action.newCard.title)
            TemArr[index] = action.newCard;
            return state = {
                ...state,
                allDecks: TemArr,
            }
        default:
            return state;
    }
}
export default deckReducer;