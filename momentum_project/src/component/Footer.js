import React from 'react';
// import FontAwesome, { Icons } from 'react-native-fontawesome';

const Footer = ()=>{
  return(
    <div>
    <footer className="col-7-footer">
      <section className="footer-left-col right-col">
         <h2 className="footer-left-heading">What is Lorem Ipsum</h2>
         <p className="footer-left-paragraph">Lorem Ipsum is simply dummy text 
         of the printing and typesetting industry.Lorem Ipsum is simply dummy text 
         of the printing and typesetting industry.</p>
         <button className="footer-right-btn button">learn more</button>
      </section>
      <section className="footer">
         <h2 className="footer-right-col-heading">get in touch</h2>
         <nav>
            <ul>
               <li> <a href="#">information@uniteltd.</a></li>
               <li><i></i><a href="#">twitter@uniteltd.</a></li>
               <li><i></i><a href="#">facebook.com@uniteltd.</a></li>
               <li><i></i><a href="#">linkedin.com@uniteltd.</a></li>
               <li><i></i><a href="#">01892330000</a></li>
               <li><i></i><a href="#">uniteltd incroprated 1234 rakkar (h.p) kangara </a></li>
            </ul>
         </nav>
      </section>
      </footer>
      <section className="copyright-section">
        <p className="copyright"> help@lipsum.comPrivacy Policy</p>
      </section>
    </div>
  )
}

export default Footer;