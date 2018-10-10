import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Contact.css";
class Contact extends Component {
  state = {
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3">
          </Col>
          <Col size="md-6 sm-12">
          <h1>Garrett responds within 24 hours</h1>
          <form>
              <Input
                value={this.state.from}
                onChange={this.handleInputChange}
                name="from"
                placeholder="Your Email"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Subject"
              />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Message Body"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Message
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
