import axios from 'axios'
import {LIST_ACTION,CREATE_ACTION, DETAILS_ACTION,
         UPDATE_ACTION,DELETE_ACTION, CREATE_PRODUCT_ACTION,
         LIST_PRODUCT_ACTION, DETAILS_PRODUCT_ACTION, UPDATE_PRODUCT_ACTION
        } from './types'
import history from '../history'

export const listAction = () => {
    return async dispatch =>{
        const response = await axios.get('/categories')
         dispatch({
             type: LIST_ACTION,
             payload: response.data
         })
    }
}
export const createAction = formdata => {
   return async dispatch => {
       const response = await axios.post('/categories/create', formdata)
       dispatch({
           type: CREATE_ACTION,
           payload: response.data
       })
       history.push('/')
   }
}

export const detailsAction = _id => {
    return async dispatch => {
        const response = await axios.get(`/categories/${_id}`)
        dispatch({
            type: DETAILS_ACTION,
            payload: response.data
        })
    }
}
export const updateAction = (_id, formdata) => {
    return async dispatch => {
        console.log(_id)
        const response = await axios.put(`/categories/update/${_id}`,formdata)
        dispatch({
            type: UPDATE_ACTION,
            payload: response.data
        })
        history.push('/')
    }
}
export const updateProductAction = (_id, formdata,catId) => {
    return async dispatch => {
        const response = await axios.put(`/products/update/${_id}`, formdata)
        dispatch({
            type: UPDATE_PRODUCT_ACTION,
            payload: response.data
        })
        history.push(`/${catId}`)
    }
}
export const deleteAction = _id => {
    return async dispatch => {
        await axios.delete(`/categories/delete/${_id}`)
        dispatch({
            type:DELETE_ACTION,
            payload:_id
        })
        history.push('/')
    }
}
export const deleteProductAction = (_id,catId) => {
    return async dispatch => {
        await axios.delete(`/products/delete/${_id}`)
        dispatch({
            type:DELETE_ACTION,
            payload:_id
        })
        history.push(`/${catId}`)
    }
}

export const createProductAction = (_id, formdata) => {
    return async dispatch => {
        const response = await axios.post(`/products/create/${_id}`, formdata)
        
       dispatch({
            type: CREATE_PRODUCT_ACTION,
            payload: response.data
        })
        
        history.push(`/${_id}`)
    }
 }
 export const listProductsAction = () => {
     return async dispatch =>{
         const response = await axios.get('/products')
         console.log(response.data)
         dispatch({
             type: LIST_PRODUCT_ACTION,
             payload: response.data
         })
     }
}
export const displayProductAction = _id => {
    return async  dispatch =>{
        const response = await axios.get(`/products/${_id}`)
        dispatch({
            type: DETAILS_PRODUCT_ACTION,
            payload: response.data
        })
    }
}