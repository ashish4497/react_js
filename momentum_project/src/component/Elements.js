import React, { Component } from 'react'
import Footer from './Footer';
import Elementheader from './Elementheader'
import Subscribe from'./Subscribe';
import Table from './Table';

export default class Elements extends Component {
  render() {
    return (
      <div className="element-dection">
        <Elementheader/>
        <section className="col-2">
	        <div className="2-row-1-col">
	        	<div className="text-row-1">
	        		<h2>text</h2>
	        		<p>Lorem Ipsum is <span>simply</span> dummy text of<span>text</span> the printing 
	        			and<button> typesetting</button> industry. Lorem Ipsum has 
	        		  been the industry's <span>standard</span> dummy text ever<a href="#">linlk</a>
	        		</p>
						</div>
						<div className="heading-row">
							<h2>heading level 2</h2>
							<h3>heading level 3</h3>
							<h4>heading level 4</h4>
							<h5>heading level 5</h5>
							<h6>heading level 6</h6>
							<p>Contrary to popular belief, Lorem Ipsum 
						   	is not simply random text. It has roots in a piece of
							  classical Latin literature from 45 BC, 
							  making it over 2000 years old. 
							  Richard McClintock, 
							  Contrary to popular belief, Lorem Ipsum 
						   	is not simply random text. It has roots in a piece of
							  classical Latin literature from 45 BC, 
							  making it over 2000 years old. 
							  Richard McClintock,
							</p>
						</div>
						<div className="list-heading">
							<h1>lists</h1>
						</div>
						<div className="list_section">
	        		
	        	<div className="unorder-list">
	        		
	        		<ul className="dot-list">
	        			<h4>unordered</h4>
	        			<li>Lorem Ipsum</li>
	        			<li>Lorem Ipsum</li>
	        			<li>Lorem Ipsum</li>
	        		</ul>
	        		<ul className="underline-list">
	        			<h4>alternate</h4>
	        			<li>Lorem Ipsum Ipsum</li>
	        			<li>Lorem Ipsum Ipsum</li>
	        			<li>Lorem Ipsum  Ipsum</li>
	        		</ul>
	        	</div>
	        	<div className="no-list">
		        	<div className="ordered-list">
		        		
		        		<ol className="order-items">
		        		<h4>ordered</h4>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>
		        		<li>There are many variations</li>

		        		</ol>
		        	</div>
	       		</div>     		
	        </div>
	        <div className="list-heading">
						<h1>defenation</h1>
						<div className="alapha">
							<h1 className="alpha-heading list-heading">alapha</h1>
							<p className="alapha p-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
								 the industry's standard dummy text ever since the 1500s
							</p>
						</div>
						<div className="beta">
							<h1 className="beta-heading list-heading">beta</h1>
							<p className="alapha p-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
								  the industry's standard dummy text ever since the 1500s
							</p>
						</div>
						<div className="gamma">
							<h1 className="gamma-heading list-heading">gamma</h1>
							<p className="alapha p-style">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
								 the industry's standard dummy text ever since the 1500s
							</p>
						</div>
						<div className="icon-heading">
						<h1>icon</h1>
						<div className="icon">
            <ul>
               <li><i></i><a href="#">fb</a></li>
               <li><i></i><a href="#">insta</a></li>
               <li><i></i><a href="#">linkin</a></li>
               <li><i></i><a href="#">medium</a></li>
               <li><i></i><a href="#">apple</a></li>
            </ul>
            </div>
						</div>
						<div className="right-btn-heading">
				     	<h1>actions</h1>
					  	<button className="right-btn color-btn">default</button>
					  	<button className="lft-btn color-btn ">default</button>
						  <div className="sec-btn-list">
						  	<button className="right-btn-btn color-btn small-btn-fill">small</button>
						  	<button className="lft-btn-btn color-btn  small-btn-blank little-btn">small</button>				  
					    </div>
					  </div>
					  <div className="action-btn-section-2">
					  <div className="left-side-btn">
					  	<div className="lft-top-btn">
						  <button className="right-btn-btn color-btn small-btn-fill">default</button>
							<button className="lft-btn-btn color-btn  small-btn-fill little-btn">small</button>	
							</div>
							<div className="lft-bottom-btn">
							<button className="right-btn-btn color-btn large-blank-btn ">default</button>
						  	<button className="lft-btn-btn color-btn  small-btn-blank little-btn ">small</button>	
					  </div>
					  </div>
					  <div className="right-side-btn">
					  	<div className="top-btn">
					  	<button className="right-btn-btn color-btn small-btn-fill big-btn">default</button>
							<button className="lft-btn-btn color-btn  small-btn-fill">small</button>	
						</div>
						<div className="bottom-btn">
							<button className="right-btn-btn color-btn large-blank-btn ">default</button>
						  <button className="lft-btn-btn color-btn  small-btn-blank">small</button>	
					  </div>
					  </div>
					  </div>
					  </div>
					   <div className="blackquote">
							<h1 className="blackquote">blackquote</h1>
							<p className="blackquote p-style">Lorem Ipsum is simply dummy 
								text of the printing and typesetting industry. Lorem Ipsum 
								has been the industry's standard dummy text ever since the 
								1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book. It has survived 
							  ot only five centuries, but also the leap into electronic 
							  typesetting, remaining essentially unchanged. It was
							  popularised in the 1960s with the release of Letraset sheets 
							  ntaining Lorem Ipsum passages, and more recently with desktop
							  publishing software like Aldus PageMaker including versions of 
							  orem Ipsum
							</p>
						</div>
						<Table/>
          </div>
           <div className="2-row-2-col">
           </div>
        </section>
        <Subscribe/>
        <Footer/>
      </div>
    )
  }
}
