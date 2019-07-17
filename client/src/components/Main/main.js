import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./main.css"

import Logger from "../Logger/logger";
import Graphs from "../Graphs/graphs";

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
        meals: []
      }
  }

  logMeal = (data) => {
    let newMeals = this.state.meals;
    newMeals.push(data);
    this.setState({
      meals: newMeals
    });
  }

  render() {

    return (
      <Container className="main-container">
        <Row className="main-row">
          <Col xs={8}>
            <Graphs meals={this.state.meals} />
          </Col>
          <Col xs={4}>
            <Logger logToMain={this.logMeal} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;