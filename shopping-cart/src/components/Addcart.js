import React, {Component, Fragment} from 'react';

class Addcart extends Component {
  render(){
    let cartitem = this.props.cart;
    let totalitem = cartitem.length;
    return(
      <Fragment>
        <div className="cart-items">
          <div className="items_lists">
            <div className= "topnav">
              <div id ="additems">
               {cartitem.map((val,index) => { 
                return (
                  <div className="display-item">
                    <img className="product-image" src={require("../images/876661122392077_1.jpg")} alt="productImage"></img>
                    <span className="title">{val.title}</span>  
                    <span className="style">{val.style}</span>
                    <span className="currency">({val.currencyFormat}{val.price})</span>
                    <div>
                      <a className="delete-btn" onClick={this.props.deleteAdditems} id={index}>X</a>
                    </div>
                  </div>  
                )}
                )}
              </div>
               <p className = "icon" onClick = {this.props.myFunction}>
              cart({totalitem})</p>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Addcart;