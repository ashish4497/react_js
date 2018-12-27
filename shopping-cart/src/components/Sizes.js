import React, {Component,Fragment} from 'react';
class Sizes extends Component {
  render(){
    // let handleClick = this.props.handleClick;
    // console.log(handleClick,"items")
    return(
      <Fragment>
        <div className="size_checkbox">
          <div className="heading">
           <h1>Sizes :</h1>
          </div>
          <div className="size-top-icon">
            <input type="checkbox" value ="M" onClick={(e)=>this.props.handleClick(e)}/>
            <input type="checkbox" value="ML" onChange={(e)=>this.props.handleClick(e)}/>
            <input type="checkbox" value="L"  onChange={(e)=>this.props.handleClick(e)}/>
            <input type="checkbox" value ="S" onChange={(e)=>this.props.handleClick(e)}/>
          </div>
          <div className="size-icon-bottom">
            <input type="checkbox" value="XL" onChange={(e)=>this.props.handleClick(e)}/>
            <input type="checkbox" value="XXl" onChange={(e)=>this.props.handleClick(e)}/>      
          </div>   
        </div>
      </Fragment>
    )
  }
}
export default Sizes;