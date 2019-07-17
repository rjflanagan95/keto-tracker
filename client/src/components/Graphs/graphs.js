import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Doughnut } from "react-chartjs-2";

class Graphs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      meals: this.props.meals,

      proteinCalories: 0,
      fatCalories: 0,
      carbCalories: 0,
      totalCalories: 0,

    }
    
    this.renderGraph = this.renderGraph.bind(this);
  }

  componentDidMount() {
    this.renderGraph();
    setInterval(this.renderGraph, 1000);
  }

  changeUserInput(target) {
    this.setState({
      [target.name]: target.value
    });
  }

  renderGraph() {
    console.log(this.state);
    // let calProtein = this.state.proteinCalories;
    // let calFat = this.state.fatCalories;
    // let calCarbs = this.state.carbCalories;
    // let totalCal = this.state.totalCalories;
    let calProtein = 0;
    let calFat = 0;
    let calCarbs = 0;
    let totalCal = 0;

    for (let i = 0; i < this.state.meals.length; i++) {
      calProtein += parseInt(this.state.meals[i].protein) * 4;
      calFat += parseInt(this.state.meals[i].fat) * 9;
      calCarbs += parseInt(this.state.meals[i].carbs) * 4;
      totalCal += parseInt(this.state.meals[i].calories);
    }

    this.setState({
      proteinCalories: calProtein,
      fatCalories: calFat,
      carbCalories: calCarbs,
      totalCalories: totalCal
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
            <Col xs={4}>
              <h5>Overview</h5>
              <div>
                <div>Total Calories: {this.state.totalCalories}</div>
                <div>Calories from Protein: {this.state.proteinCalories}</div>
                <div>Calories from Fat: {this.state.fatCalories}</div>
                <div>Calories from Carbs: {this.state.carbCalories}</div>
              </div>
              <h5>Today's Meals</h5>
              <div className="food-list">
                {this.state.meals.map((val, index) =>
                <div className="food-item" key={index}>
                  <h6>{val.food}</h6>
                  <div>{val.mealType} - {val.mealDate}</div>
                  <div>Calories: {val.calories}</div>
                  <div>Protein: {val.protein}g</div>
                  <div>Fat: {val.fat}g</div>
                  <div>Carbs: {val.carbs}g</div>
                </div>
                )}
              </div>
            </Col>
            <Col xs={8}>
              <Doughnut data={data} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Graphs;