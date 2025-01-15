import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./ActionType"


//here we make the functions that return the action type
export const makeRequest = () => {
    return{
        type:MAKE_REQUEST
    }
}

//when the request fails we need to pass in the pay load as the err msg
export const failRequest = (err) => {
    return{
        type:FAIL_REQUEST,
        payload: err
    }
}

//here the table data request is made hence the payload is data 
export const getUserList = (data) => {
    return{
        type:GET_USER_LIST,
        payload: data
    }
}