import axios from "axios"
import { ADD_USER, DELETE_USER, FAIL_REQUEST, GET_USER_OBJ, GET_USER_LIST, MAKE_REQUEST, UPDATE_USER } from "./ActionType"
import { toast } from "react-toastify"


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

//when we wan to delete a user
export const deleteUser=()=>{
    return{
        type:DELETE_USER
    }
}
//adding a user
export const addUser=()=>{
    return{
        type:ADD_USER
    }
}
//update a user
export const updateUser=()=>{
    return{
        type:UPDATE_USER
    }
}
//fetch a user
export const getUserObj=(data)=>{
    return{
        type:GET_USER_OBJ,
        payload:data
    }
}

//we need a dispatch function too
//we create a async funtion for api calls hence we use thunk
//the below is a dispatch function

export const FetchUserList = () => {
    return(dispatch) => {
        dispatch(makeRequest());
        axios.get('http://localhost:8000/user').then(res => {
            const userlist= res.data;
            dispatch(getUserList(userlist));
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

export const Removeuser=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('http://localhost:8000/user/'+code).then(res=>{
            dispatch(deleteUser());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionAddUser = (data) => {
    return(dispatch)=>{
        dispatch(makeRequest())
        axios.post('http://localhost:8000/user',data).then(res => {
            dispatch(addUser());
            toast.success(`User added Successfully`)
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}



export const FunctionUpdateUser = (data,code) =>{
    return(dispatch) => {
        dispatch(makeRequest())
        axios.put('http://localhost:8000/user/'+code,data).then(res => {
            dispatch(updateUser());
            toast.success('user updated successfully')
        }).catch(err =>{
            dispatch(failRequest(err.message))
        })
    }
}
export const FetchUserObj = (code) => {
    return(dispatch) =>{
        dispatch(makeRequest())
        axios.get('http://localhost:8000/user/'+code).then(res => {
            const userlist = res.data
            dispatch(getUserObj(userlist))
        }).catch(err => {
            dispatch(failRequest(err.message))
        })
    }
}

