import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./ActionType"

const initialstate = {
    loading: true,
    userlist: [],
    userobj: {},
    errmessage: ''
}

export const Reducer = (state=initialstate, action) => {
    switch(action.type){
        case MAKE_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading: true,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return{
                ...state,
                loading: false,
                errmessage: '',
                userlist: action.payload,
                userobj: {}
            }
            case DELETE_USER:
                return {
                    ...state,
                    loading: false,
                    //userlist: state.userlist.filter(user => user.id !== action.payload),  // Remove the deleted user from userlist
                }
            case ADD_USER:
                return{
                    ...state,
                    loading:false
                }
            case UPDATE_USER:
                return{
                    ...state,
                    loading:false
                }
            case GET_USER_OBJ:
                return{
                    ...state,
                    loading:false,
                    userobj:action.payload
                } 
            
        default: return state  
    }
}