import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
    return (
        <div className="Menu-container">
      <div className=" footer-style">
        <div className="row">
          <div className="col-md-2">
            <div className="ms-5">
              <h2>All Courses </h2>
                <ul className="">
                    <li>Class one</li>
                    <li>Class two</li>
                    <li>Class three</li>
                    <li>Class four</li>
                    <li>Class five</li>
                </ul>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-catagories-end justify-content-end">
                <Link to="/home" className="catagories">
                  <li>Home</li>
                </Link>
                <Link to="/student" className="catagories">
                  <li>student</li>
                </Link>
                <Link to="/about" className="catagories">
                  <li>About us</li>
                </Link>
                <Link to="contact" className="catagories">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;