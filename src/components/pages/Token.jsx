import React from "react";
import { FaCat } from "react-icons/fa";

const Token = () => {
  return (
    <>
      <div className="token-section py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span class="badge btn-badge mb-3 p-2">Then Token</span>
              <div className="text-content text-white">
                <h1 className="fw-bold">
                  The SafeMoon Protocol V2 is a community focused DeFi token
                  that forms part of the expanding SafeMoon ecosystem.
                </h1>
                <p className="mb-5">
                  Four simple functions occur during each trade
                </p>
                <ul class="list-large font-weight-bold mb-0 custom-list">
                  <div className="d-flex">
                    <div
                      className="react-icon-cat align-items-center fs-2"
                      style={{ marginRight: "5px" }}
                    >
                      <FaCat />
                    </div>
                    <li
                      class="mb-3 aos-init aos-animate list-unstyled fw-bold fs-5"
                      data-aos="fade-in"
                    >
                      Reflections
                      <br />
                      <small class="text-muted mb-0">
                        4% is Redistributed to all existing holders
                      </small>
                    </li>
                  </div>
                  <div className="d-flex">
                    <div
                      className="react-icon-cat align-items-center fs-2"
                      style={{ marginRight: "5px" }}
                    >
                      <FaCat />
                    </div>
                    <li
                      class="mb-3 aos-init aos-animate list-unstyled fw-bold fs-5"
                      data-aos="fade-in"
                    >
                      LP Acquisition
                      <br />
                      <small class="text-muted mb-0">
                        3% is added to liquidity
                      </small>
                    </li>
                  </div>
                  <div className="d-flex">
                    <div
                      className="react-icon-cat align-items-center fs-2"
                      style={{ marginRight: "5px" }}
                    >
                      <FaCat />
                    </div>
                    <li
                      class="mb-3 aos-init aos-animate list-unstyled fw-bold fs-5"
                      data-aos="fade-in"
                    >
                      Token Burn
                      <br />
                      <small class="text-muted mb-0">
                        2% of tokens are burned
                      </small>
                    </li>
                  </div>
                  <div className="d-flex">
                    <div
                      className="react-icon-cat align-items-center fs-2"
                      style={{ marginRight: "5px" }}
                    >
                      <FaCat />
                    </div>
                    <li class="mb-3 aos-init list-unstyled fw-bold fs-5" data-aos="fade-in">
                      Growth Fund
                      <br />
                      <small class="text-muted mb-0">
                        1% is added to the SafeMoon Ecosystem Growth Fund
                      </small>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="global-img d-flex justify-content-center">
                <img
                  src="assests/spaceman-stars.png"
                  className="img-fluid"
                  alt="spaceman-stars"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Token;
