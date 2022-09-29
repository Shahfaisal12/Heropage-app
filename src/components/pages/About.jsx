import React from 'react'

const About = () => {
  return (
    <>
    <div className="about-section py-5 bg-dark">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <span class="badge btn-badge mb-3 p-2">About Us</span>
                    <div className="text-content text-white">
                        <h1 className='fw-bold'>A human-focused technology and innovation business expanding blockchain technologies for a brighter tomorrow.</h1>
                        <p>Deeply connected to and driven by our award winning community (The SafeMoon Army), we are innovating for good. Building blockchain, commerce, metaverse and NFT products to derive new kinds of value from crypto technology and to apply it to increasingly better use.</p>
                        <p>We are now addressing the second part of our mission – the expansion and channeling of our technology to propel new innovations for good, and a Venture Philanthropy model to advance those innovations to every part of the world.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="global-img d-flex justify-content-center">
                        <img src="assests/global.jpg" className='img-fluid' alt="global-img" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About