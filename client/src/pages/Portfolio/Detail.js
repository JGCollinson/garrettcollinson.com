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
          <Col size="lg-12" />
        </Row>
        <Row>
        <Col size="lg-3">
              <Headshot />
            <section>
              <article class="article">
                <h2>Brand Statement:</h2>
                <p>
                  Garrett Collinson is a jr. web-developer, database architect,
                  and data scientist rolled into a fun and friendly package with
                  4 years of experience in high quality reporting.
                </p>
              </article>
            </section>
        </Col>
        <Col size="lg-6">
        <section>
              <article class="article">
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
                <img class="img-rounded" src="https://storage.googleapis.com/public-1234/portfolio/datapyramid.png" />
                </article>
            </section>
        </Col>
        <Col size="lg-3">
        
        </Col>

        </Row>
      </Container>
    );
  }
}

export default Detail;
