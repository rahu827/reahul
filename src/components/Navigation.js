// eslint-disable-next-line 
import React from 'react'

const Navigation = () => {
  return (
<nav class="navbar navbar-expand-lg ">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand logo" href="#"><img src="/img/logo.png" alt="logo"/>
      </a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">WHy ?</a>
        </li>
      </ul>
      <form class="d-flex">
        
      </form>
    </div>
  </div>
</nav>
    
  );
}

export default Navigation
