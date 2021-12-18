import React from "react";
import {connect} from 'react-redux'
import {createAction} from '../actions/index'
import Form from "./form";

 class Create extends React.Component{
    onsubmit = data => {
        this.props.createAction(data)
    }
    render(){
    return(
        <div>
         <Form title="create" onsubmit={this.onsubmit}/>
        </div>
    )
    }
}
export default connect(null,{createAction})(Create)


/*
class Create extends React.Component{
    state={name:'',description:''}
    onSubmit = e => {
        e.preventDefault();
        const data = {name:this.state.name, description:this.state.description}
        console.log(data)
        this.props.createAction(data)
    }
    onChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]:value})
    }
    render(){
        return(
            <div>
                <Form 
                   title="Create"
                   onSubmit={this.onSubmit}
                   name={this.state.name} 
                   description={this.state.description}
                   onChange={this.onChange}
                />
            </div>
        )
    }
}
export default connect(null,{createAction})(Create)


/*
const Create = () => {
    return(
        <div>
            <Form title="create record"/>
        </div>
    )
}
*/
