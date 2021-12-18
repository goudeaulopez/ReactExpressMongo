import React from "react";

class Form extends React.Component{
    state={name:'', description:'', nameError:'',descriptionError:'', messageError:''}
    componentDidMount(){
        if(this.props.selected){
            this.setState({name:this.props.selected.name,description:this.props.selected.description})
        }
    }
    onSubmit= e => {
        e.preventDefault();
        if(this.state.name === '' && this.state.description === ''){
            this.setState({messageError:'no empty fields'})
        }else if(this.state.description === ''){
            this.setState({descriptionError:'add description'})
        }else if(this.state.name === '' ){
            this.setState({nameError:'add name'})
        }else{
            const data = {name: this.state.name, description: this.state.description}
            this.props.onsubmit(data)
        }
        
    }
    onChange=e=>{
        const name = e.target.name
        const value = e.target.value

        this.setState({[name]:value})
    }
    render(){
      
        return(
            <div>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.onSubmit}>
                    {this.state.messageError}
                    <div>
                        <label>name</label><br/>
                        <input onChange={this.onChange} name="name" value={this.state.name}/><br/>
                        {this.state.nameError}
                    </div>
                    <div>
                        <label>description</label><br/>
                        <input onChange={this.onChange} name="description" value={this.state.description}/><br/>
                        {this.state.descriptionError}
                    </div><br/>
                    <button type="submit">{this.props.title}</button>
                </form>
            </div>
        )
    }
}
export default Form


/*
import React from 'react'

class Forma extends React.Component{
    state = { fullname:'', email:'', mobile:'', errorMessage:''}
    componentDidMount(){
        if(this.props.selected){
            this.setState({fullname: this.props.selected.fullname, email:this.props.selected.email, mobile: this.props.selected.mobile })
        }
    }
    sendingData = e => {
        e.preventDefault();
        const data = { fullname: this.state.fullname, email: this.state.email, mobile: this.state.mobile}

        if( this.state.fullname === '' || this.state.email === '' || this.state.mobile === ''){
            this.setState({errorMessage:'no empty fields'})
        }
        else{
            this.props.onSubmit(data)
        }
       
    }
   
   addingData = e => {
       console.log(e.target.name)
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]:value})
 }
    render(){

        return(
            <div>
                <form onSubmit={this.sendingData}>
                    <div>
                        <label>Fullname</label>
                        <input value={this.state.fullname} onChange={this.addingData} name="fullname"/>
                        <br/>
                        {this.state.errorMessage}
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={this.state.email} onChange={this.addingData} name="email"/>
                    </div>
                    <div>
                        <label>Mobile</label>
                        <input value={this.state.mobile} onChange={this.addingData} name="mobile"/>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

*/