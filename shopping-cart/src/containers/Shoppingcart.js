import React, {Component,Fragment} from 'react';
import ShoppingItems from '../components/Shoppingitems'
import Sizes from '../components/Sizes';
import Header from '../components/Header';
import Addcart from '../components/Addcart';

class Shoppingcart extends Component {
  constructor(){
    super()
    this.state = {
      shoppingItem :[],
      cart:[],
      count : 0,
      filter:[]
    }  
  }
  
  componentWillMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json')
    .then(resp => resp.json())
    .then(shoppingdata => {
      this.setState({ 
          shoppingItem :shoppingdata.products
        });
        // console.log( this.state.shoppingItem ,"datainfo")
      }
    );
  }

  handleSubmit = (id) => {
    // console.log(index)
    if(this.state.cart.includes(id)){
      this.setState({
        count :this.state.count++
      })
      console.log(this.state.count++,"adding index")
    } 
    this.setState({
      cart :[...this.state.cart, this.state.shoppingItem[id]]
		 })
	}
  

  higest = (e) => {
    console.log(e.target.value);
    const {shoppingItem} =this.state;
    let shoritem = (e.target.value === 'volvo') ? shoppingItem.sort((a,b) => a.price-b.price) :
    shoppingItem.sort((a,b) => b.price-a.price)
    this.setState({shoppingItem: shoritem})
  }

   myFunction = () => {
    var x = document.getElementById("additems");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  deleteAdditems =(e) => {
   let index = e.target.id;
   this.state.cart.splice(index,1);
   this.setState({cart:this.state.cart})
  }

  handleClick = (e) => {
    const {shoppingItem} = this.state;
    let checkItem = shoppingItem.filter((v) => v.availableSizes.includes(e.target.value));
    console.log(checkItem)
    // this.setState({filter:checkItem}) 
  }

  render() { 
    return (
      <Fragment>
         <Header header={this.state.filter} higest={this.higest} />
         <Addcart  myFunction = {this.myFunction} cart = {this.state.cart} 
          deleteAdditems = {this.deleteAdditems}
         />
        <div className= "main_section">
          <div className="size_sction">
            <Sizes handleClick={this.handleClick}/>
          </div>
          <div className= "main_wrapper">
            <ShoppingItems shoppingdata={this.state.filter} handleSubmit={this.handleSubmit} className="detai"/>           
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Shoppingcart ;