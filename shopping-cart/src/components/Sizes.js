import React, {Component,Fragment} from 'react';
class Sizes extends Component {
  render(){
    // let handleClick = this.props.handleClick;
    // console.log(handleClick,"items")
    var sizes = ["M","ML","L","S","XL","XXl"]
    return(
      <Fragment>
        <div className="size_checkbox">
          <div className="heading">
           <h1>Sizes :</h1>
          </div>
          <div className="size-top-icon">
          {
            sizes.map((v) => {
              return (
                <span className="size-value">
                <label>
                <input type="checkbox" value={v} onChange={(e)=>this.props.handleClick(e)}/>
                </label>
                {v}
                </span>
              )                
            })
          }
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Sizes;