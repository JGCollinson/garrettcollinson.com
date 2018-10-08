import React from "react";
import "./Nav.css"
import Headroom from 'react-headroom'
import { SocialIcon } from 'react-social-icons';

const Nav = () => (
  <Headroom disableInlineStyles>
  <div class="bs-component sticky">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/"><img src="https://storage.googleapis.com/public-1234/portfolio/logoAnalytics.png" alt=""></img></a>
    
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Portfolio">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Contact">Message</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://storage.googleapis.com/public-1234/Josef%20Garrett%20Collinson%20Resume.pdf">Resume</a>
        </li>
        <li class="nav-item">
        <a href="/Call" class="nav-link">Schedule Call</a>
        </li>
        <li class="nav-item" id="social">
        <SocialIcon url="https://www.facebook.com/garrettcollinson" color="#891DB8" style={{margin: "0.2em"}}/>
        <SocialIcon url="https://github.com/JGCollinson" color="#891DB8" class="nav-link" style={{margin: "0.2em"}}/>
        <SocialIcon url="https://twitter.com/Smashing_Joe" color="#891DB8" class="nav-link" style={{margin: "0.2em"}}/>
        <SocialIcon url="https://www.linkedin.com/in/j-garrett-collinson/" color="#891DB8" class="nav-link" style={{margin: "0.2em"}}/>
        <SocialIcon url="https://www.instagram.com/garrettcollinson/" color="#891DB8" class="nav-link" style={{margin: "0.2em"}}/>
        <SocialIcon network="email" href="mailto:jgarrettcollinson@outlook.com" color="#891DB8" class="nav-link" style={{margin: "0.2em"}}/>
        </li>
      </ul>
    </div>
  </nav>
</div>
</Headroom>
);

export default Nav;
