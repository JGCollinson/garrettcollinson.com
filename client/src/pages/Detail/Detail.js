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
        <Row>
        <Col size="lg-6">
              <Headshot />

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
                  and data scientist rolled into a fun and friendly package with
                  4 years of experience in high quality reporting.</p>
                  <h2>GarrettCollinson.com:</h2>
                <p>
                  If your organization needs a passionate developer for creating
                  persistent systems that automatically provide intelligence
                  about crucial business operations with minimal set up and
                  oversight,&nbsp;
                  <a
                    href="https://www.linkedin.com/in/j-garrett-collinson/"
                  >
                    click here to connect with me on linkedIn. 
                  </a>
                  </p>
                  
  </div>
  <div class="tab-pane fade" id="profile">
    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
      <img src="https://via.placeholder.com/350x150"></img>
      <img src="https://via.placeholder.com/350x150"></img>
      <img src="https://via.placeholder.com/350x150"></img>
      <img src="https://via.placeholder.com/350x150"></img>

  </div>

</div>
        </Col>
        <Col size="lg-6">
                <img class="img-rounded" src="https://storage.googleapis.com/public-1234/portfolio/datapyramid.png" alt="" />
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
