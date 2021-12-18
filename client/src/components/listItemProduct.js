import React from 'react'
import history from '../history'

const ListItemProd = props => {

    if(!props.listprod){
        return <div>loading</div>
    }
    const itemsProd =  props.listprod.map( item => {
        if(item.catId !== props.catid){
            return <div key={item._id}></div>
        }
        else{
            return (<div onClick={()=> history.push(`/product/${item._id}`)} key={item._id}>{item.productName}</div>)
        }
      
    })
    //console.log(itemsProd)
    return(
        <div>
         {itemsProd}
        </div>
    )
}

export default ListItemProd