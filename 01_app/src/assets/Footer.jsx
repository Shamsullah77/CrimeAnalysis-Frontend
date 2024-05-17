import React from 'react';

function Footer() {
  return (
    <footer id="footer-section">
    <div id="first-row">
      
      <div id="footer-logo">
        <h3 className="headings">Crime Anlysis and Prediction System</h3>
        <img src="../../img/icon.png" alt="Logo" className="footer__logo" />
        <a href="../../sign_up.html" className="nav__link nav__link--btn btn--show-modal">Create an acount</a>
      </div>

      <div id="patient-part">
        <h3 className="headings">For Crime</h3>
        <a href="#" className="myLinks">Search for Criminals</a>
        <a href="#" className="myLinks">Login</a>
        <a href="#" className="myLinks">Register</a>
        <a href="#" className="myLinks">Analysis</a>
        <a href="#" className="myLinks">Dashboard</a>
      </div>

      <div id="Doctor-part">
        <h3 className="headings">For Criminal</h3>
        <a href="#" className="myLinks">Prediction</a>
        <a href="#" className="myLinks">Chat</a>
        <a href="#" className="myLinks">Login</a>
        <a href="#" className="myLinks">Register</a>
        <a href="#" className="myLinks">Spatiality</a>
      </div>

      <div id="Contact-us">
        <h3 className="headings">Contact Us</h3>
       
        <a href="#" className="myLinks">Twitter</a>
        <a href="#" className="myLinks">Facebook</a>
        <a href="#" className="myLinks">WhatsApp</a>
        <a href="#" className="myLinks">Skype</a>
        <a href="#" className="myLinks">Telegram</a>
      </div>

    </div>

    <div id="second-row">
      <hr />
      <div id="second-row-contant">
        <p className="footer__copyright">&copy; Copyright by<a className="footer__link twitter-link" target="_blank" href="https://twitter.com/SHejjran" >Shamsullah Kamalzai</a >. Use for Analysis and pridection.</p>
        <div id="my-sotial-media-icons">
          <a href="#"><img src="../../img/pic-4.jpg" alt="" /></a>
          <a href="#"><img src="../../img/pic-5.jpg" alt="" /></a>
          <a href="#"><img src="../../img/pic-6.jpg" alt="" /></a>

        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
