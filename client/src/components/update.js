import React from 'react'
import {connect} from 'react-redux'
import {updateAction} from '../actions/index'
import Form from './form'

class Update extends React.Component{
   onsubmit = data => {
        console.log(data)
        this.props.updateAction(this.props.match.params._id,data)
    }
    render(){
        return(
            <div>
              <Form title="update" onsubmit={this.onsubmit} selected={this.props.selected}/>
            </div>
        )
    }   
}
const mapStateToProps = (state, ownProps)=>{
    return { selected :  state.crud[ownProps.match.params._id]}
}
export default connect(mapStateToProps, {updateAction})(Update)
