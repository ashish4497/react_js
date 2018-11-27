import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Subscribe from'./Subscribe';
import image from '../image/way.jpeg';

export default class Generic extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="col-2-img">
        	<div className="image-section">
        		<img src={image}/>
        	</div>
       
        </section>
        <Subscribe/>	
        <Footer/>
      </div>
    )
  }
}
