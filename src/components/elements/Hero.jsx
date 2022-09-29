import React from "react";
// import { Link } from 'react-router-dom';
import { AiFillCopy } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import{FiAlertTriangle} from 'react-icons/fi'
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-section" id="hero">
      <section class="video-container pt-5">
        <video
          style={{ minWidth: "100%", minHeight: "100%" }}
          playsinline
          autoplay
          muted
          loop
        >
          <source
            class="h-100"
            src="https://mdbootstrap.com/img/video/Lines.mp4"
            type="video/mp4"
          />
        </video>
        <div class="content text-white mt-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="alert alert-danger d-flex align-items-center"
                  role="alert"
                >
                  <FiAlertTriangle />
                  <div style={{marginLeft:'10px'}}>
                    We've Evolved: Support for V1 SafeMoon officially
                    closed. <a href="/" className="btn-readmore">readmore</a>
                  </div>
                </div>
                <div className="text-container">
                  <p className="mb-0 text-uppercase">Welcome to</p>
                  <h1 className="text-uppercase fw-bold mb-0">SAFEMOON</h1>
                  <p>Community-driven Innovation for Good</p>
                  <div className="mb-5">
                    <a
                      href="/"
                      className="btn btn-info text-white fs-5"
                      style={{ marginRight: "30px" }}
                    >
                      Consolidate to V2 safeMoon!
                    </a>
                    <a href="/" className="btn text-white fw-bold fs-5">
                      Buy V2
                    </a>
                    <a href="/" className="btn text-white fw-bold fs-5">
                      Swap
                    </a>
                    <a href="/" className="btn text-white fw-bold fs-5">
                      Live Chart
                    </a>
                  </div>
                  <p className="my-t fw-bold">SafeMoon (SFM) V2 Contract:</p>
                  <div class="d-inline-block pb-5">
                    <div class="address-wrapper">
                      <span>0x42981d0bf...b9092fcB5</span>
                      <span className="fs-5">
                        <AiFillCopy />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="wallet py-5  mt-0 mt-md-5 text-center">
                <p className="mb-0">Out Now:</p>
                  <h4 className="fw-bold mb-0">SafeMoon Wallet</h4>
                  <p>Get it on:</p>
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid" src="assests/google_play.png" alt="" style={{width:'150px', marginRight:'8px'}} />
                    <img className="img-fluid" src="assests/app_store.png" alt="" style={{width:'150px'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Link to='hero'>
      <a class="fixedButton" href>
         <div class="roundedFixedBtn"><TiArrowSortedUp className="fs-1 color-9B9B9C" /></div>
      </a>
      </Link>
    
    </div>
  );
};

export default Hero;
