import * as actionTypes from './actionTypes';
import axios from 'axios';

export const listPosts = () => async(dispatch) => {
    try{
        dispatch({type:actionTypes.POST_LIST_REQUEST});
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch({
            type:actionTypes.POST_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:actionTypes.POST_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}