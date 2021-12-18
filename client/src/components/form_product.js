import React from "react";

class FormProduct extends React.Component{
    state={productName:'', description:'',price:'',prodError:'',descrError:'',priceError:'',messageError:''}
    componentDidMount(){
        if(this.props.selected){
            var selected = this.props.selected
            this.setState({productName:selected.productName,description:selected.description,price:selected.price})
        }
    }
    onSubmit= e => {
        e.preventDefault();
        if(this.state.productName === '' && this.state.description=== '' && this.state.price === ''){
            this.setState({messageError:'no empty field'})
        }else if(this.state.productName === ''){
            this.setState({prodError:'product name required'})
        }else if(this.state.description === ''){
            this.setState({descrError:'description required'})
        }else if(this.state.price === ''){
            this.setState({priceError:'price required'})
        }else{
            const data = {productName: this.state.productName, description: this.state.description,price:this.state.price}
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
                        <label>product name</label>
                        <input onChange={this.onChange} name="productName" value={this.state.productName}/>
                    </div>
                    <div>
                        <label>description</label>
                        <input onChange={this.onChange} name="description" value={this.state.description}/>
                    </div>
                    <div>
                        <label>price</label>
                        <input onChange={this.onChange} name="price" value={this.state.price}/>
                    </div>
                    <button type="submit">{this.props.title}</button>
                </form>
            </div>
        )
    }
}
export default FormProduct

/*
productName: String,
    description: String,
    price: String,
    catId: { type: Schema.Types.ObjectId, ref: 'categories' }
*/