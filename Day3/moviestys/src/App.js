import React, { Component } from 'react';
import Movies from './Movies'
import Header from './Header'

class App extends Component {
  constructor(props){ 
    super(props)
    this.state= {
      movies:[]
    }
  }
 

componentWillMount(){ 
  fetch('https://gist.githubusercontent.com/nnnkit/84a2e3ad069128604614fd5e1c728d94/raw/4a2593181e54ed3d90ab8dc8017f0242641cd98d/data.json').then(res=> {
    if(res.ok){ 
    return res.json();
  }
  else {
    throw new Error('Error')
  }
}).then(d => this.setState({
    movies: d.data.movies
  }))
}

render() {
  const {title_english, medium_cover_image} = this.props
    return (
      <div className="App">
        <Header/>
        <div className="map">
        { 
        this.state.movies.map(movie => <Movies name = {movie.title_english} 
          src={movie.medium_cover_image}/>
          )}
        </div>
      </div>
    )
  }
}


export default App;