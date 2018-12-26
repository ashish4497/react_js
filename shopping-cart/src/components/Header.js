import React, {Component,Fragment} from 'react';
class Header extends Component {
  render(){
    // let headerinfo = this.props.header;
    let length = this.props.header.length;
    // let higest = headerinfo.sort((a,b) => b.price-a.price)
    //  console.log( higest )
     
    return(
      <Fragment>
        <div className="header-deaction">
          <h1> ({length}) product(s) founded</h1>
        <div className="order">
          <span className="text">order by</span>
          <select name= "select" className="select-section" onClick={(e) => this.props.higest(e)}>
            <option value="">select</option>
            <option value="volvo">Lowest to highest</option>
            <option value="saab">Hight to lowest</option>
          </select>
        </div>
        </div>
      </Fragment>
    )
  }
} 
export default Header;