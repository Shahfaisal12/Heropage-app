import React from "react";

const Background = () => {
  return (
    <div className="pt-4">
      <div className="background-img">
        <div className="container">
          <div className="vw-50 m-auto py-5">
            <div className="content align-items-center my-5">
              <div className="px-5 pt-5">
              <img className="img-fluid" src="assests/worldcup.png" alt="" />
              </div>
              <div className="content-text px-5  pb-5 mt-5 text-white">
              <h3 className="text-truncate my-3">Website will be live soon</h3>
              <p className="text-truncate my-3">
We are working on the web and will be live soon. It won't take long, we promise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
