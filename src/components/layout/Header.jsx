import React from "react";

const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <div class="container">
    <a class="navbar-brand" href="/"><img src="assests/logo-safemoon.svg" style={{width:'50px'}} alt="logo" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white underline" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Our Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Swap</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Merch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Partners</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Markets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">How to Buy</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Header;
