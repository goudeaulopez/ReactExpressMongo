import React from "react";
import history from '../history'

const ListItem = props => {

    if(!props.list){
        return <div>no data</div>
    }

    const items = props.list.map(
        item=>{
            
            return(
               <div key={item._id}>
                    <div>{item.name}</div>
                    <button onClick={()=>{history.push(`/${item._id}`)}}>details</button>
               </div>
            )
        }
    )
    return(
        <div>
            {items}
        </div>
    )
}
export default ListItem

//<div>{item._id}</div>