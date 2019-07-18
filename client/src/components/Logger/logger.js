import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import "./logger.css";

class Logger extends Component {
  constructor(props) {
    super(props)

    this.state = {
        mealDate: "",
        food: "",
        mealType: "",
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
      }

      this.submitMeal = this.submitMeal.bind(this);
  }

  changeUserInput(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  submitMeal() {
    let newMeal = {
      mealDate: this.state.mealDate,
      food: this.state.food,
      mealType: this.state.mealType,
      calories: this.state.calories,
      protein: this.state.protein,
      fat: this.state.fat,
      carbs: this.state.carbs
    }

    this.props.logToMain(newMeal);
    this.setState({
      mealDate: "",
      food: "",
      mealType: "",
      calories: 0,
      protein: 0,
      fat: 0,
      carbs: 0
    })
  }

  render() {
      const left = 4;
      const right = 8;

    return (
      <div className="panel meal-logger">
        <div className="title">Log a Meal</div>
        <Container>
            <Row className="form-row">
                <Col xs={left}>Date:</Col>
                <Col xs={right}><Form.Control className="form-input" onChange={(e) => this.changeUserInput(e.target)} name="mealDate" value={this.state.mealDate} type="date"/></Col>
            </Row>
            <Row className="form-row">
              <Col xs={left}>Food:</Col>
              <Col xs={right}><Form.Control className="form-input" onChange={(e) => this.changeUserInput(e.target)} name="food" value={this.state.food} type="text" /></Col>
            </Row>
            <Row className="form-row">
                <Col xs={left}>Meal:</Col>
                <Col xs={right}>
                    <Form.Control className="form-input" as="select" onChange={(e) => this.changeUserInput(e.target)} name="mealType">
                        <option value="Breakfast">Breakfast</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                        <option value="Snack">Snack</option>
                    </Form.Control>
                </Col>
            </Row>
            <Row className="form-row">
                <Col xs={6}>Calories:</Col>
                <Col xs={6}><Form.Control className="form-input log-number" onChange={(e) => this.changeUserInput(e.target)} name="calories" value={this.state.calories} type="number" /></Col>
            </Row>
            <Row className="form-row">
                <Col xs={6}>Protein (grams):</Col>
                <Col xs={6}><Form.Control className="form-input log-number" onChange={(e) => this.changeUserInput(e.target)} name="protein" value={this.state.protein} type="number" /></Col>
            </Row>
            <Row className="form-row">
                <Col xs={6}>Fat (grams):</Col>
                <Col xs={6}><Form.Control className="form-input log-number" onChange={(e) => this.changeUserInput(e.target)} name="fat" value={this.state.fat} type="number" /></Col>
            </Row>
            <Row className="form-row">
                <Col xs={6}>Carbs (grams):</Col>
                <Col xs={6}><Form.Control className="form-input log-number" onChange={(e) => this.changeUserInput(e.target)} name="carbs" value={this.state.carbs} type="number" /></Col>
            </Row>
        </Container>
        <div className="submit-row">
            <div className="log-button" onClick={this.submitMeal} >Log Meal</div>
        </div>
      </div>
    );
  }
}

export default Logger;