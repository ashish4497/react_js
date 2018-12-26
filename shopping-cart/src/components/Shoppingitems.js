import React, {Component,Fragment} from 'react';
// import { watchFile } from 'fs';

class Shoppingitems extends Component {
  render(){ console.log(this.props)
    let shoppingInfo = this.props.shoppingdata;
    var info = shoppingInfo ? shoppingInfo : "loading...";
    return(
      <Fragment>
        <div className="shopping_list">
        {info.map((value,index) => {
        return (
          <div  key={index} className="product-catogery"> 
            <img className="product-image" src={require("../images/876661122392077_1.jpg")} alt="productImage"></img>
            <p className="product_name">{value.title}</p>
            <div className ="amount">
            <span className="currency">{value.currencyFormat}</span>
            <span className="price">{value.price}</span>
            <button  className="btn" onClick={() => this.props.handleSubmit(index)}>Add to cart</button>
            </div>
          </div>
          )
         })}          
         </div>
      </Fragment>
    )
  }
}

export default Shoppingitems;