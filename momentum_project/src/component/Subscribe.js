import React from 'react'

const Subscribe =()=>{
	return(
		<section className="subsctibe-section ">
          <div className="subscribe-content">
            <h2 className="subsctibe-section-heading">Why do we use it?</h2>
            <p className="subsctibe-section-paragraph">It is a long established fact that a 
              reader will be distracted by
            </p>
            <form>
               <input type="text" placeholder="your email address" className="subscribe-input"/>
               <button className="subscribe-btn button">subscribe</button>
            </form>
          </div>
        </section>
	)
}
export default Subscribe;