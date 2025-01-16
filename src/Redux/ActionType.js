//here we define the action type we can have actions like making a request and it can have success or failure of request
//First we make the request and request failure part
export const MAKE_REQUEST='MAKE_REQUEST'
export const FAIL_REQUEST='FAIL_REQUEST'

//now we need the table data 
export const GET_USER_LIST='GET_USER_LIST'

//now if we want to delete a user
export const DELETE_USER='DELETE_USER'

//now to add a user
export const ADD_USER='ADD_USER'

//to fetch a user 
export const GET_USER_OBJ='GET_USER_OBJ'

//in order to update we need to fetch the user data first
//edit the user
export const UPDATE_USER='UPDATE_USER'



//now once this action types are defined we need to return them inside of the action.js
