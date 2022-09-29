import React from 'react'

const Introduction = () => {
  return (
    <>
    <div className="introduction-section pt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                <div className="intro-text">
                <span class="badge btn-badge mb-3 p-2">Introducing</span>
                    <div className="text-content text-white">
                        <h1 className='fw-bold'>The SafeMoon Exchange</h1>
                        <p>The SafeMoon exchange is a revolutionary new idea that will bring tokenomics to all of crypto on its platform. We call this Cryptonomics.</p>
                    </div>
                    <div className="btn-comming">
                        <button className='btn btn-outline-secondary rounded-pill fw-bold p-2' style={{width:'200px'}}>Comming Soon</button>
                    </div>
                </div>
                </div>
                <div className="col-md-6">
                    <div className="iphone-img d-flex justify-content-center">
                        <img src="assests/iphone.png" className='img-fluid' alt="global-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Introduction