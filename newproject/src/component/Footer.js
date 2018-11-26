import React from 'react'

const Footer = ()=>{
  return(
    <footer>
    <section className="footer-left-col">
       <h2 className="footer-left-heading">What is Lorem Ipsum</h2>
       <p className="footer-left-paragraph">Lorem Ipsum is simply dummy text 
       of the printing and typesetting industry.</p>
       <button className="footer-right-btn">learn more</button>
    </section>
    <section className="footer-right-col">
       <h2 className="footer-right-col-heading">get in touch</h2>
       <nav>
          <ul>
             <li><i></i><a href="#">information@uniteltd.</a></li>
             <li><i></i><a href="#">twitter@uniteltd.</a></li>
             <li><i></i><a href="#">facebook.com@uniteltd.</a></li>
             <li><i></i><a href="#">linkedin.com@uniteltd.</a></li>
             <li><i></i><a href="#">01892330000</a></li>
             <li><i></i><a href="#">uniteltd incroprated 1234 rakkr (h.p)</a></li>
          </ul>
          <p className="copyright"> help@lipsum.comPrivacy Policy</p>
       </nav>
    </section>
 </footer>
  )
}

export default Footer;