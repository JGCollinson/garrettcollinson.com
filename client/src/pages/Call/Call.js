import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./Call.css"
class Call extends Component {
  state = {
    Contact: {}
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <article>
              <h1>Schedule A Call Below</h1>
                <div class="calendly-inline-widget" data-url="https://calendly.com/jgarrettcollinson"></div>
            </article>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default Call;
