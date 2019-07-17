import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Doughnut } from "react-chartjs-2";

class Graphs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [300, 50, 100],
      meals: this.props.meals,

      proteinCalories: 0,
      fatCalories: 0,
      carbCalories: 0,

    }
    
    this.renderGraph = this.renderGraph.bind(this);
  }

  changeUserInput(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  renderGraph() {
    let calProtein, calFat, calCarbs, totalCal;

    for (let i = 0; i < this.state.meals.length; i++) {
      calProtein += this.state.meals[i].protein * 4;
      calFat += this.state.meals[i].fat * 9;
      calCarbs += this.state.meals[i].carbs * 4;
      totalCal += this.state.meals[i].calories;
    }

    this.setState({
      proteinCalories: calProtein,
      fatCalories: calFat,
      carbCalories: calCarbs
    });
  }

  render() {
    const data = {
        labels: [
            'Protein',
            'Carbs',
            'Fat'
        ],
        datasets: [{
            // data: this.state.data,
            data: [this.state.proteinCalories, this.state.carbCalories, this.state.fatCalories],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    

    return (
      <div className="panel graph-panel">
        <Container>
          <Row>
            <Col xs={3}>
              <h5>Today's Meals</h5>
              <div className="food-list">
                {this.state.meals.map((val, index) =>
                <div key={index}>
                  <h6>{val.food}</h6>
                  <p>{val.mealType} - {val.mealDate}</p>
                  <p>Calories: {val.calories}</p>
                  <p>Protein: {val.protein}g</p>
                  <p>Fat: {val.fat}g</p>
                  <p>Carbs: {val.carbs}g</p>
                </div>
                )}
              </div>
            </Col>
            <Col xs={9}>
              <Doughnut data={data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Graphs;