import React from "react";
import {connect} from 'react-redux'
import {detailsAction,deleteAction} from '../actions/index'
import ListProducts from './list_products'
import history from '../history'

class Display extends React.Component{
    componentDidMount(){
        this.props.detailsAction(this.props.match.params._id)
        console.log(this.props.match.params._id)
    }
    render(){
        var selected = this.props.selected
       if(!selected){
            return<div>loading</div>
        }
        console.log(selected._id)
        return(
            <div>
              <button onClick={()=> history.push(`/`)}>back</button>
              <button onClick={()=> history.push(`/update/${selected._id}`)}>Update</button> 
              <button onClick={()=> this.props.deleteAction(this.props.match.params._id)}>delete</button>
              <h1>{selected.name}</h1>
              <h1>{selected.description}</h1>
              
              <br/>
              <button onClick={()=>{ history.push(`/products/create/${this.props.match.params._id}`)}}>Create</button> 
              <ListProducts catid ={selected._id} />
              
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return { selected: state.crud[ownProps.match.params._id]}
}
export default connect(mapStateToProps,{detailsAction,deleteAction})(Display)

///${this.props.selected._id}

/*
import React from 'react'
import {connect} from 'react-redux'
import {detailsAction,deleteAction} from '../actions'
import history from '../history'

class Details extends React.Component{
    componentDidMount(){
     this.props.detailsAction(this.props.match.params._id)
    }
    render(){
        var selected = this.props.selected;
        if(!selected){
            return <div>loading</div>
        }
        return(
            <div>
                <h1>{selected.fullname}</h1>
                <h2>{selected.email}</h2>
                <h3>{selected.mobile}</h3>
                
                
                <div style={{display:'flex'}}>
                <button onClick={() => history.push(`/update/${selected._id}`)}>update</button>
                <button onClick={()=>this.props.deleteAction(this.props.match.params._id)}>delete</button>
               
                </div>
            </div> 
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { selected: state.myReducer[ownProps.match.params._id]}
}
export default connect(mapStateToProps, {detailsAction,deleteAction})( Details)


*/