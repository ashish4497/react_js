import React, {Component,Fragment} from 'react';
class Sizes extends Component {
  render(){
    return(
      <Fragment>
        <div className="size_checkbox">
          <div className="heading">
           <h1>Sizes :</h1>
          </div>
          <div className="size-top-icon">
            <input type="checkbox" value ="m"/>
            <input type="checkbox" value="ml"/>
            <input type="checkbox" value="l"/>
            <input type="checkbox" value ="s"/>
          </div>
          <div className="size-icon-bottom">
            <input type="checkbox" value="xl"/>
            <input type="checkbox" value="xxl"/>      
          </div>   
        </div>
      </Fragment>
    )
  }
}
export default Sizes;