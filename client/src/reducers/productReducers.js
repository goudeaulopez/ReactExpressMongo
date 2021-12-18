import _ from 'lodash'
import {LIST_PRODUCT_ACTION, CREATE_PRODUCT_ACTION, 
    DETAILS_PRODUCT_ACTION,DELETE_ACTION,
    UPDATE_PRODUCT_ACTION} from '../actions/types'

export default function poo(state={},action){
    switch(action.type){
        case LIST_PRODUCT_ACTION:
            return {...state, ..._.mapKeys(action.payload,'_id')}
        case CREATE_PRODUCT_ACTION:
            return {...state, [action.payload._id]:action.payload}
        case DETAILS_PRODUCT_ACTION:
            return {...state, [action.payload._id]:action.payload}
        case UPDATE_PRODUCT_ACTION:
            return {...state, [action.payload._id]:action.payload}
        case DELETE_ACTION:
            return _.omit(state,action.payload)
        default:
          return state
    }

}