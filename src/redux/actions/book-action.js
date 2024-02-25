import { ActionType } from "../constants/action-types"



export const setBooks = (books)=>{

return{
    type:ActionType.SET_BOOK,
    payload:books
}

}

export const addBook = (book)=>{
    return {

        type:ActionType.ADD_BOOK,
        payload:book
    }
}

export const removeBook = ()=>{
    return {
        type:ActionType.REMOVE_BOOK
    }
}