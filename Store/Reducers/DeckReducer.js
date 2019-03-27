import Types from "../const/Types"

const initState = {
    allDecks: [],
    indiDeck: null,
    loader_GET_DECKS: false,
    loader_GET_DECK: false,
}

const deckReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.addDeck:
            return state = {
                ...state,
                allDecks: [
                    ...state.allDecks,
                    action.newDeck,
                ],
            }
        case Types.getDecks:
            return state = {
                ...state,
                allDecks: action.all_Decks,
                loader_GET_DECKS: false,
            }

        case Types.getDeck:
            return state = {
                ...state,
                indiDeck: action.indi_Deck,
                loader_GET_DECK: false,
            }

        case Types.addcard:
            const TemArr = [...state.allDecks];
            const index = TemArr.findIndex(v => v.title === action.newCard.title)
            TemArr[index] = action.newCard;
            return state = {
                ...state,
                allDecks: TemArr,
            }
        case Types.deleteDeck:
            const TemArrD = [...state.allDecks];
            const i = TemArrD.findIndex(v => v.title === action.id)
            TemArrD.splice(i, 1)
            return state = {
                ...state,
                allDecks: TemArrD,
            }
        case Types.errorOfGetDecks:
            return state = {
                ...state,
                loader_GET_DECKS: true,
            }
        case Types.errorOfGetDeck:
            return state = {
                ...state,
                loader_GET_DECK: true,
            }
        default:
            return state;
    }
}
export default deckReducer;