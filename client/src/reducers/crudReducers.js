
import _ from 'lodash'
import {LIST_ACTION, CREATE_ACTION, DETAILS_ACTION,
         UPDATE_ACTION,DELETE_ACTION
        } from '../actions/types'

export default function foo(state = {}, action) {
    switch (action.type) {
      case LIST_ACTION:
        return {...state, ..._.mapKeys(action.payload,'_id')}
      case CREATE_ACTION:
        return {...state, [action.payload._id]:action.payload}
      case DETAILS_ACTION:
         return {...state, [action.payload._id]:action.payload}
      case UPDATE_ACTION:
         return {...state, [action.payload._id]:action.payload}
      case DELETE_ACTION:
        return _.omit(state,action.payload)
       default:
        return state;
    }
  }



  /*
   import _ from 'lodash'
import { 
         LIST_ACTION, CREATE_ACTION, DETAILS_ACTION, UPDATE_ACTION,DELETE_ACTION
        } 
  from '../actions/types'


export default ( state={}, action ) =>{
    switch(action.type){
        case LIST_ACTION: 
          return {...state, ..._.mapKeys(action.payload,'_id')}
        case CREATE_ACTION:
          return {...state, [action.payload._id]: action.payload}
        case UPDATE_ACTION:
            return {...state, [ action.payload._id]:action.payload }
        case DETAILS_ACTION:
            return {...state, [action.payload._id]:action.payload}
        case DELETE_ACTION:
              return _.omit(state, action.payload)
        default:
            return state
    }
}


  */