import { combineReducers } from "redux";
import deckReducer from "./DeckReducer";
import notiReducer from "./notiReducer";
const rootReducers = combineReducers({
    deck: deckReducer,
    noti: notiReducer,
})
export default rootReducers;