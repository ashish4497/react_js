import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../image/building.jpeg';
import forest from '../image/forest.jpeg';
import camera from '../image/clickphoto.jpeg';
import Subscribe from './Subscribe'

class Home extends Component {
  render() {
    return (
      <div>
         <Header />
         <section className="image_section">
            <h2  className="main-heading">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
            <p className="sub-heading">There are many variations of passages of Lorem </p>
            <button className="learn-btn button">learn more</button>
         </section>
         <section className="two_image_section">
            <div className="left-image">
               <h2 className="left-image-heading"> Latin professor at Hampden-Sydney College in Virginia,</h2>
               <button className="left-image-btn button">learn more</button>
            </div>
            <div className="right-image">
               <h2 className="right-image-heading"> Latin professor at Hampden-Sydney College in Virginia,</h2>
               <button className="right-image-btn button">learn more</button>
            </div>
         </section>
         <section className="main_section">
            <div className="row-3-paragraph">
              <div className="left-paragraph-section">
                 <h1 className="main-heading">Neque porro quisquam est qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit...
                 </h1>
                 <p className="first-paragraph">Contrary to popular belief, Lorem Ipsum is not
                  simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, 
                  making it over 2000 years old.
                 </p>
                 <p className="second-paragraph">Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more 
                  obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                   the cites of the word in classical literature, discovered the undoubtable source.
                 </p>
                 <p className="third-paragraph">There are many variations of passages of
                  Lorem Ipsum available, but the majority 
                  have suffered alteration in some form, by injected humour
                 </p>
                 <button className="left-paragraph-btn color-btn">learn more</button>
              </div>
            </div>
            <div className="right-paragtaph-section">
               <div className="paragraph-image-1 right-col">
                  <img src={camera} classname="main-image-paragraph-1"></img>
                  <h2 className="img-heading-1">Where does it come from</h2>
                  <p className="img-paragraph-1">The standard chunk of Lorem Ipsum used since 
                  the 1500s is reproduced below for those interested.
                  </p>
                  <button className="img-paragraph-btn-1 color-btn">learn more</button>
               </div>
               <div className="paragraph-image-2 right-col">
               <img src={camera} classname="main-image-paragraph-2"></img>
                  <h2 className="img-heading-2">Where does it come from</h2>
                  <p className="img-paragraph-2">The standard chunk of Lorem Ipsum used since 
                  the 1500s is reproduced below for those interested.
                  </p>
                  <button className="img-paragraph-btn-2 color-btn">learn more</button>
               </div>
               <div className="paragraph-image-3 right-col">
               <img src={camera}  classname="main-image-paragraph-3"></img>
                  <h2 className="img-heading-3">Where does it come from</h2>
                  <p className="img-paragraph-3">The standard chunk of Lorem Ipsum used since 
                  the 1500s is reproduced below for those interested.
                  </p>
                  <button className="img-paragraph-btn-3 color-btn">learn more</button>
               </div>
               <div className="paragraph-image-4 right-col">
               <img src={camera}  classname="main-image-paragraph-4"></img>
                  <h2 className="img-heading-4">Where does it come from</h2>
                  <p className="img-paragraph-4">The standard chunk of Lorem Ipsum used since 
                  the 1500s is reproduced below for those interested.
                  </p>
                  <button className="img-paragraph-btn-4 color-btn color-btn">learn more</button>
               </div>
            </div>
         </section>
         <section className="sub_section">
            <div className="left-col">
               <img src={forest} className="left-image"></img>
            </div>
            <div className=" right-colm-1 right-col">
               <h2 className="right-col-heading ">Where can I get some</h2>
               <p className="right-col-paragraph"> If you are going to use a passage
                of Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
               </p>
               <button className="right-col-btn color-btn">learn more</button>
            </div>
         </section>
          <Subscribe/>
         <Footer/>
      </div>
  
    )
  }
}


export default Home;