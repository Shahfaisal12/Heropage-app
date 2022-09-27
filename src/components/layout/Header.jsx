import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

const linkstyle = { textDecoration: "none", color: "#000000" };

const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img className="img-fluid" src="assests/logo-gnosis.png" alt="" style={{width:'50px'}} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{marginLeft:'auto'}}>
                <li className="nav-item">
              <Link to="/" style={linkstyle}>
                  <a className="nav-link active" aria-current="page" href="/">
                    Protocol
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/faqs" style={linkstyle}>
                  <a className="nav-link" href="/">
                    Safe
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/faq" style={linkstyle}>
                  <a className="nav-link" href="/">
                  GnosisDAO
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/contact" style={linkstyle}>
                  <a className="nav-link" href="/">
                    Developers
                  </a>
              </Link>
                </li>
                <li className="nav-item">
              <Link to="/contact" style={linkstyle}>
                  <a className="nav-link" href="/">
                    Careers
                  </a>
              </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
