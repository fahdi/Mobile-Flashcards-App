import { combineReducers } from "redux";
import deckReducer from "./DeckReducer";
const rootReducers = combineReducers({
    deck: deckReducer,
})
export default rootReducers;