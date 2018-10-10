import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Headshot from "../../components/Headshot";
import "./Detail.css";
class Detail extends Component {
  state = {
    Contact: {}
  };

  render() {
    return (
      <Container fluid>
              <Headshot />
<Row>
<Col size="lg-1"/>
        <Col size="lg-10">
              <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active show" data-toggle="tab" href="#home">Brand Statement</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#profile">Profile</a>
  </li>
</ul>
<div id="myTabContent" class="tab-content">
  <div class="tab-pane fade active show" id="home">
  <h2>Brand Statement:</h2>
    <p> Garrett Collinson is a jr. web-developer, database architect,
                  and data scientist rolled into a <span class="antiClock">fun</span> and friendly package with
                  4 years of experience in high quality reporting.</p>   
                <img id="resume" src="https://storage.googleapis.com/public-1234/portfolio/BannerGarrettcollinson.png" alt="" />

  </div>
  <div class="tab-pane fade" id="profile">
  <h2>GarrettCollinson.com:</h2>
  <p>
                  If your organization needs a passionate developer for creating
                  persistent systems that automatically provide intelligence
                  about crucial business operations with minimal set up and
                  oversight,&nbsp;
                  <a
                    target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/j-garrett-collinson/"
                  >
                    click here to connect with me on linkedIn. 
                  </a>
                  </p>
                  <h3>Personal Note:</h3>
    <p>I truely have a passion for designing sustainable systems that help make peoples lives easier and more purpousful. Working as a data analyst I'll have that thought in mind when creating reports that inform and accuratly describe the reality of our efforts together. In web development I'll strive to design well documented, tested, and purposebuilt code as if I were designing for the louvre</p>
        <img id="personal" src="https://storage.googleapis.com/public-1234/portfolio/Fishing.jpg" alt="" />
                <img id="personal" src="https://storage.googleapis.com/public-1234/portfolio/CanadianRockies.jpg" alt="" />
  </div>
</div>
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
