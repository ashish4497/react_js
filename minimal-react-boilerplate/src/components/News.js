import React, {Component,Fragment} from 'react';

class News extends Component {
  render() {
    var countrynews= (this.props.countrynews || [])
    // console.log(countrynews,"hlo")
    return (
      <Fragment>
        <div className ="main_section">
          {
            countrynews.map((value,id) => {
              return (
                <div className="display-info">
                  <div className="image_section">
                    <img className ="news-image"src ={value.urlToImage}/>
                  </div>
                  <div className="info_block">
                    {/* <a href = {value.url}  target="_blank">{value.title}</a> */}
                    <p>{value.title}</p>
                    <div className="detail">
                      <p>{value.publishedAt}</p>
                      <p>{value.author}</p>
                    </div>
                    <p className="description">{value.description}</p>
                    {/* <h5>{value.content}</h5> */}
                  </div>
                </div>
              )
            })
        }
        </div>
      </Fragment>
    )
  }
}
export default News;