import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./main.css"

import Logger from "../Logger/logger";
import Graphs from "../Graphs/graphs";

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
      }
  }

  render() {

    return (
      <Container>
        <Row>
          <Col xs={8}>
            <Graphs />
          </Col>
          <Col xs={4}>
            <Logger />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;