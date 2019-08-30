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
          <a class="nav-link" href="mailto:webdev@garrettcollinson.com?subject=We%20want%20to%20hire%20you!&body=Hello,%20I%20saw%20your%20website%20and%20I%20think%20you'd%20be%20a%20great%20fit%20with%20our%20team.%20Our%20compensation%20is%20XX$/hr%20or%20XXX,XXX$/year%20for%20the%20position%20I%20am%20reccomending.%20We%20(Do/Do%20Not)%20allow%20remote%20work.%20(This)%20is%20our%20vacation%20policy.%20(This)%20is%20the%20start%20date%20and%20(this)%20is%20the%20location.">Message</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" target="_blank" rel="noopener noreferrer" href="https://storage.googleapis.com/public-1234/portfolio/Josef%20Garrett%20Collinson%20Resume%203.25.19.pdf?fbclid=IwAR1IwcrCrZj77dQlSK0U8A8dJA1Cp_kiSue65zppxA7gTbZqDQxKfr_bjxc">Resume</a>
        </li>
        <li class="nav-item">
        <a href="/Call" class="nav-link">Schedule Call</a>
        </li>
        <li class="nav-item" id="social">
        <SocialIcon url="https://www.facebook.com/garrettcollinson" color="#891DB8" style={{margin: "0.2em", height: 40, width:40}}/>
        <SocialIcon url="https://github.com/JGCollinson" color="#891DB8" class="nav-link" style={{margin: "0.2em", height: 40, width:40}}/>
        <SocialIcon url="https://twitter.com/Smashing_Joe" color="#891DB8" class="nav-link" style={{margin: "0.2em", height: 40, width:40}}/>
        <SocialIcon url="https://www.linkedin.com/in/j-garrett-collinson/" color="#891DB8" class="nav-link" style={{margin: "0.2em", height: 40, width:40}}/>
        <SocialIcon url="https://www.instagram.com/garrettcollinson/" color="#891DB8" class="nav-link" style={{margin: "0.2em", height: 40, width:40}}/>
        <SocialIcon network="email" url="mailto:webdev@garrettcollinson.com?subject=We%20want%20to%20hire%20you!&body=Hello,%20I%20saw%20your%20website%20and%20I%20think%20you'd%20be%20a%20great%20fit%20with%20our%20team.%20Our%20compensation%20is%20XX$/hr%20or%20XXX,XXX$/year%20for%20the%20position%20I%20am%20reccomending.%20We%20(Do/Do%20Not)%20allow%20remote%20work.%20(This)%20is%20our%20vacation%20policy.%20(This)%20is%20the%20start%20date%20and%20(this)%20is%20the%20location." color="#891DB8" class="nav-link" style={{margin: "0.2em", height: 40, width:40}}/>
        </li>
      </ul>
    </div>
  </nav>
</div>
</Headroom>
);

export default Nav;
