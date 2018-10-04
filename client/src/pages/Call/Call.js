import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./Call.css"
class Call extends Component {
  state = {
    Contact: {}
  };
  // When this component mounts, grab the Contact with the _id of this.props.match.params.id
  // e.g. localhost:3000/Contacts/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getContact(this.props.match.params.id)
      .then(res => this.setState({ Contact: res.data }))
      .catch(err => console.log(err));
  }

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
