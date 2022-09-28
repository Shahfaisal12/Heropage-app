import React from "react";
import {
  BsArrowRight,
  BsTwitter,
  BsDiscord,
  BsMarkdownFill,
} from "react-icons/bs";
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <div className="container pt-5 pb-5">
        <div className="row mt-5 mt-md-0 align-items-center">
          <h3 className="fw-normal">
            Gnosis builds new market mechanisms for decentralized finance. Our
            three interoperable product lines allow you to securely{" "}
            <a href="/" className="create-link">
              create
            </a>
            ,{" "}
            <a href="/" className="trade-link">
              trade
            </a>{" "}
            , and{" "}
            <a href="/" className="hold-link">
              hold
            </a>{" "}
            digital assets on Ethereum.
          </h3>
        </div>

        <div className="row py-5">
          <div className="col-md-6">
            <div className="text-container">
              <h1>
                Build on <br />
                Gnosis
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-para">
              <p className="fw-normal">
                The Gnosis Developer Portal provides introductions, technical
                documentation, and tutorials, and the{" "}
                <a href="/" className="text-black fs-6">
                  Gnosis Ecosystem Fund (GECO)
                </a>{" "}
                provides teams with mentoring, marketing, and funding up to
                $100,000 to build on Gnosis.
              </p>
              <div className="btn-button">
                <button className="btn fw-bold text-white d-flex">
                  <span style={{ marginRight: "40px" }}>Get Started</span>{" "}
                  <span className="icon">
                    <BsArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6">
            <div className="product-img d-flex justify-content-center">
              <img
                src="assests/product-logo.png"
                className="img-fluid"
                style={{ width: "100px" }}
                alt=""
              />
            </div>
            <div className="btn-button d-flex justify-content-center my-5">
              <button className="btn fw-bold text-white d-flex">
                <span style={{ marginRight: "40px" }}>Visit Forum </span>{" "}
                <span className="icon">
                  <BsArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="text-truncate">Participate in GnosisDAO</h1>
            <p className="mt-5">
              GnosisDAO is the prediction market-driven collective, stewarding
              the Gnosis ecosystem through futarchy: governance by prediction
              markets.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="join-text">
              <h1 className="text-truncate">
                Join the <br /> Community
              </h1>
            </div>
            <div className="join-social-icon my-5">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-3">
                  <div className="socila-icon mt-2">
                    <a className="fixedButton" href>
                      <div className="roundedFixedBtn">
                        <BsMarkdownFill />
                      </div>
                    </a>
                  </div>
                  </div>
                <div className="col-md-3 col-sm-3 col-3">
                  <div className="socila-icon mt-2">
                    <a className="fixedButton" href>
                      <div className="roundedFixedBtn">
                        <BsTwitter />
                      </div>
                    </a>
                  </div>
                  </div>
                <div className="col-md-3 col-sm-3 col-3">
                  <div className="socila-icon mt-2">
                    <a className="fixedButton" href>
                      <div className="roundedFixedBtn">
                        <BsDiscord />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="join-section-card d-flex">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="card bg-danger rounded mr-5 mb-5">
                    <div className="card-body">
                      <p className="card-text mb-5 pb-5">
                        DappCon is a nonprofit conference for the Ethereum
                        ecosystem, organized by Gnosis.
                      </p>
                      <div className="btn-card d-flex pt-5">
                        <a href="/" class="btn">
                          DappCon
                        </a>{" "}
                        <div className="btn-arrow d-flex ml-auto align-items-center">
                          <a href="/" className="text-black">
                            <BsArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="card bg-primary rounded mr-5">
                    <div className="card-body">
                      <p className="card-text  mb-4">
                        Full Node is a co-working space for decentralized
                        technology initiatives to work and collaborate, run by
                        Gnosis.
                      </p>
                      <div className="btn-card d-flex">
                        <a href="/" class="btn">
                          Full Node
                        </a>{" "}
                        <div className="btn-arrow d-flex align-items-center">
                          <a href="/" className="text-black">
                            <BsArrowRight />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn-button mt-4">
                    <button className="btn fw-bold text-white d-flex">
                      <span style={{ marginRight: "40px" }}>Newsletter </span>{" "}
                      <span className="icon">
                        <BsArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
