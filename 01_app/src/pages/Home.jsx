

import React, { useState } from 'react';

// import "../assets/css/style.css";


const Home =() =>{

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div>
      <section className="section" id="section--1">
        <div className="section__title">
          <h2 className="section__description">Features</h2>
        </div>
        <div id="card">
          <div className="cards">
            <img src="../../img/Criminal-1.jpg" alt="" />
            <div className="card-containt">
              <h3>Murder</h3>
              <hr />
              <p>Mr.Abdullah</p>
              <time> 8 Hours </time>
              <a href="#">Learn more</a>
            </div>
          </div>

          <div className="cards">
            <img src="../../img/Criminal-2.jpg" alt="" />
            <div className="card-containt">
              <h3>Theft</h3>
              <hr />
              <p>Mr.Khan</p>
              <time> 6 Hours </time>
              <a href="#">Learn more</a>
            </div>
          </div>

          <div className="cards">
            <img src="../../img/Criminal-3.jpg" alt="" />
            <div className="card-containt">
              <h3>Accidente</h3>
              <hr />
              <p>Mr.Sansullah</p>
              <time> 12 Hours </time>
              <a href="#">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="section--2-1">
        <div className="map-section">
          <h3>Real Map</h3>
          <div id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54350.47011402564!2d65.71171262532734!3d31.63646829868431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed671baa0e28837%3A0x2759b21c9042aa75!2sKandahar%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1714325954345!5m2!1sen!2s"
              width="1180"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="section" id="section--2">
      <div className="section__title"></div>

      <div className="operations">
        <div className="operations__tab-container">
          <button
           className={`operations__tab operations__tab--1 ${activeTab === 1 ? 'operations__tab--active' : ''}`}
            onClick={() => handleTabClick(1)}
          >
            <span>01</span>Abdullah sahil
          </button>
          <button
            className={`operations__tab operations__tab--2 ${activeTab === 2 ? 'operations__tab--active' : ''}`}
            onClick={() => handleTabClick(2)}
          >
            <span>02</span>Javid Ahmad
          </button>
          <button
            className={` operations__tab operations__tab--3 ${activeTab === 3 ? 'operations__tab--active' : ''}`}
            onClick={() => handleTabClick(3)}
          >
            <span>03</span>Qadir jan
          </button>
        </div>
        <div className={`operations__content operations__content--1 ${activeTab === 1 ? 'operations__content--active' : ''}`}>
          <div className="operations__icon operations__icon--1">
            <img src="../../img/user-1.jpg" alt="" />
          </div>
          <h5 className="operations__header">
            your pridection is more comporhansive.
          </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className={`operations__content operations__content--2 ${activeTab === 2 ? 'operations__content--active' : ''}`}>
          <div className="operations__icon operations__icon--2">
            <img src="../../img/user-3.jpg" alt="" />
          </div>
          <h5 className="operations__header">
            Your Analysis i think more difeculte.
          </h5>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={`operations__content operations__content--3 ${activeTab === 3 ? 'operations__content--active' : ''}`}>
          <div className="operations__icon operations__icon--3">
            <img src="../../img/Qadir jan.jpg" id="Qadir" alt="" />
          </div>
          <h5 className="operations__header">
            No longer need your account? No problem! Close it instantly.
          </h5>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Home;
