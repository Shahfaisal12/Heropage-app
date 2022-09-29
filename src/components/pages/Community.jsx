import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiGroup } from "react-icons/ti";
import { FaWater, FaHandHoldingUsd } from "react-icons/fa";

const Community = () => {
  return (
    <>
      <div className="community-section py-5 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div className="com-icon-div text-center">
                    <TiGroup className="com-icons" />
                  </div>
                </div>
                <div className="com-text text-white">
                  <h4 className="fw-bold fs-3">Community Focused</h4>
                  <p>
                    Community Focused and fair launch. The dev team burned all
                    of their tokens and participated with everyone else.
                  </p>
                  <a href="/">
                    Join Us <AiOutlineArrowRight className="fw-bold fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex mt-5 mt-md-0">
                <div className="d-flex align-items-center">
                  <div className="com-icon-div text-center">
                    <FaWater className="com-icons" />
                  </div>
                </div>
                <div className="com-text text-white">
                  <h4 className="fw-bold fs-3">Automatic LP</h4>
                  <p>
                  Every trade contributes towards auto-generating liquidity that goes into multiple pools used by exchanges
                  </p>
                  <a href="/">
                    View BscScan <AiOutlineArrowRight className="fw-bold fs-5" />
                  </a>
                </div>
              </div>
              </div>
            <div className="col-md-4">
              <div className="d-flex mt-5 mt-md-0">
                <div className="d-flex align-items-center">
                  <div className="com-icon-div text-center">
                    <FaHandHoldingUsd className="com-icons" />
                  </div>
                </div>
                <div className="com-text text-white">
                  <h4 className="fw-bold fs-3">RFI Static Rewards</h4>
                  <p>
                  Holders earn passive rewards through static reflection as they watch their balance of SafeMoon grow indefinitely.
                  </p>
                  <a href="/">
                    Check Your wallet <AiOutlineArrowRight  className="fw-bold fs-5" />
                  </a>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
