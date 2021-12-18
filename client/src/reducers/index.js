import {combineReducers} from 'redux'
import crudReducers from './crudReducers'
import prodReducer from './productReducers'

export default combineReducers({
    crud: crudReducers,
    prod: prodReducer
})