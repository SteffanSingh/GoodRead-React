import { type } from "@testing-library/user-event/dist/type"
import { ActionType } from "../constants/action-types"



const initialState = {
books:[]

}

export const bookReducer =(state=initialState,
    {type,payload})=>

{

    switch (type) {

        case ActionType.SET_BOOK:
            return {
                ...state,
                books:payload
            }
            default:
                return state
            
        
    }


    
}

export const slelectBookReducer=(state={}, {type, payload} )=>
{
 switch (type){
    case ActionType.ADD_BOOK:
        return {
            ...state, ...payload
        }

        case ActionType.REMOVE_BOOK:
            return
            {


                {}
                

            }
            default: return state
 }


}