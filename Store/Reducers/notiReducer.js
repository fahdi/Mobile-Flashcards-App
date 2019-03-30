import Types from "../const/Types";

const initState = {
 date : "",
}

const notiReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.saveQuizDate:
            return state = {
                ...state,
                date: action.d
            };
        default:
            return state;
    }
}

export default notiReducer;