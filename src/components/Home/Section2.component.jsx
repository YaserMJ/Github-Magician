import React from "react";
import "./Home.styles.css";
const SectionTwo = () => (
  <div>
    <div className="jumbotron jumbotron-fluid bg-light">
      <div className="container">
        <h1 className="display-4">
          Your searchings, answered! <i className="fas fa-magic three"></i>
        </h1>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <i className="fas fa-trophy three"></i>
              <p>Battle your Github Friends!</p>
            </div>
            <div className="col-sm">
              <i class="fas fa-search three"></i>
              <p>Find people on Github</p>
            </div>
            <div className="col-sm">
              <i className="fas fa-star three"></i>
              <p>Discover popular Repos</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3>Technologies used:</h3>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img
            className="logos"
            src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            alt=""
          />
        </div>
        <div className="col-sm">
          <img
            className="logos"
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/react-router-logo.png"
            alt=""
          />
        </div>
        <div className="col-sm">
          <img
            className="logos"
            src="https://cdn.freebiesupply.com/logos/large/2x/javascript-logo-png-transparent.png"
            alt=""
          />
        </div>
        <div className="col-sm">
          <img
            className="logos"
            src="http://pluspng.com/img-png/bootstrap-png-bootstrap-512.png"
            alt=""
          />
        </div>
        <div className="col-sm">
          <img
            className="logos"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
            alt=""
          />
        </div>
        <div className="col-sm">
          <img
            className="logos"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Cloud-API-Logo.svg/1139px-Cloud-API-Logo.svg.png"
            alt=""
          />
        </div>
        <div className="col-sm">
          <img
            className="logos"
            src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <footer>
      <small>All rights reserved - Yaser Saleh</small>
    </footer>
  </div>
);
export default SectionTwo;
