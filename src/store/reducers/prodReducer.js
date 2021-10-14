import * as actionTypes from '../actions/actionTypes';

export const postReducer = (state={posts:[]},action) => {
    switch(action.type){
        case actionTypes.POST_LIST_REQUEST : 
            return {loading:true,posts:[]}
        case actionTypes.POST_LIST_SUCCESS :
            return {loading:false,posts:action.payload}
        case actionTypes.POST_LIST_FAIL :
            return {loading:false,error:action.payload}         
        default :
            return state;
    }
}