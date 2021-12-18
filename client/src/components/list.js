import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {listAction} from '../actions/index'
import ListItem from './listItem'

class List extends React.Component{
    componentDidMount(){
        this.props.listAction()
    }
    render(){
        console.log(this.props.list)
        return(
            <div>
               <ListItem  list={this.props.list}/>
               <Link to="/create">Create</Link>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{ list: Object.values(state.crud)}
}
export default connect(mapStateToProps,{listAction})(List)


/*
const List = () => {
    return(
        <div>
            <ListItem title="list"/>
        </div>
    )
}
export default List



import React from 'react'
import { connect } from 'react-redux'
import {listAction} from '../actions/index'
import ListItem from './listItem.js'

class List extends React.Component{
    componentDidMount(){
       this.props.listAction()
    }
    renderList = () => {
   
     if(this.props.list.length === 0 ){
         return <p>no data</p>
     }
     return this.props.list.map(
            elementList => {
              return <ListItem key={elementList._id} elementList={elementList}/>
            }
        )
    }
    render(){
        console.log(this.props.list)
      return <div>{this.renderList()}</div>
    }
    
}
const mapStateToProps = state => {
    return{
        list: Object.values(state.myReducer)
    }
}
export default connect( mapStateToProps, {listAction} )(List)
*/