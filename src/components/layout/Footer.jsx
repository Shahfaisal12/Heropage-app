import React from "react";
import {BsBoxArrowUpRight, BsDiscord, BsTwitter, BsLinkedin, BsYoutube, BsReddit} from 'react-icons/bs'
import {AiFillSetting} from 'react-icons/ai'
import {RiInstagramFill} from 'react-icons/ri'
import {ImFacebook2} from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className="footer-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="footer-left-sec d-flex">
                <div className="logo-img d-flex align-items-center" style={{marginRight:'16px'}}>
                  <a href="/"><img src="assests/logo-safemoon.svg" style={{width:'80px'}} alt="logo"  /></a>
                </div>
                <div className="footer-text text-white">
                  <h4>SafeMoon - Innovating for Good</h4>
                  <p>Building blockchain, commerce, metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to increasingly better use. Advancing our innovations to every part of the world.</p>
                <div className="social-icon">
                  <BsDiscord /> <ImFacebook2 /> <BsTwitter /> <RiInstagramFill /> <BsLinkedin /> <BsYoutube /> <BsReddit />
                </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="links">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-6">
                  <ul className="mt-5 mt-md-0">
                  <li>
                    <a href="/">Wallet Tracker</a>
                  </li>
                  <li>
                  <a href="/">Branding</a>
                  </li>
                  <li>
                  <a href="/">White Paper</a>
                  </li>
                  <li>
                  <a href="/">Contract</a>
                  </li>
                  <li>
                  <a href="/">Status</a>
                  </li>
                  <li>
                  <a href="/">SafeMoon Card</a>
                  </li>
                </ul>
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                  <ul className="mt-5 mt-md-0">
                    <li>
                      <a href="/">Support</a>
                    </li>
                    <li>
                      <a href="/">List a Token</a>
                    </li>
                    <li>
                      <a href="/">Careers</a>
                    </li>
                    <li>
                      <a href="/">Education <BsBoxArrowUpRight /> </a>
                    </li>
                    <li>
                      <a href="/">Wallpaper</a>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row">
            <div className="footer-nav mt-5">
              <ul className="d-inline-flex flex-wrap justify-content-center">
                <li>
                  <a href="/" className="btn">Terms of Use</a>
                </li>
                <li>
                  <a href="/" className="btn">Privacy Policy</a>
                </li>
                <li>
                  <a href="/" className="btn">Cookies Policy</a>
                </li>
                <li>
                  <a href="/" className="btn">Wallet EULA</a>
                </li>
                <li>
                  <a href="/" className="btn">Wallet Privacy</a>
                </li>
                <li>
                  <a href="/" className="btn">Disclaimer</a>
                </li>
                <li>
                  <a href="/" className="btn">FAQ</a>
                </li>
                <li>
                  <a href="/" className="btn">Our Partners</a>
                </li>
              </ul>
              <p className="text-center copyright">Copyright © 2022 SafeMoon US LLC | All Rights Reserved. <AiFillSetting /></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
