import { combineReducers } from "redux";
import { bookReducer, slelectBookReducer } from "./book-reducer";

const rootReducer = combineReducers({
    allbooks:bookReducer,
    book:slelectBookReducer
    
})


export default rootReducer;