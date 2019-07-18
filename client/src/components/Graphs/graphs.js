import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./graphs.css";

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
            '#011936',
            '#F9DC5C',
            '#A63D40'
            ],
            hoverBackgroundColor: [
            '#2F425A',
            '#FBE897',
            '#B66062'
            ]
        }]
    };
    

    return (
      <div className="panel graph-panel">
        <Container>
          <Row>
            <Col xs={4}>
              <div id="overview" className="graph-card">
                <div className="title">Overview</div>
                <div className="overview-stats">
                  <div>Total Calories: {this.state.totalCalories}</div>
                  <div>Calories from Protein: {this.state.proteinCalories}</div>
                  <div>Calories from Fat: {this.state.fatCalories}</div>
                  <div>Calories from Carbs: {this.state.carbCalories}</div>
                </div>
              </div>
              <div id="food-list" className="graph-card">
                <div className="title">Today's Meals</div>
                {this.state.meals.map((val, index) =>
                <div className="food-item" key={index}>
                  <div className="food-item-title">{val.food}</div>
                  <div className="food-item-details">
                    <div className="food-item-date">{val.mealType} - {val.mealDate}</div>
                    <div>Calories: {val.calories}</div>
                    <div>Protein: {val.protein}g</div>
                    <div>Fat: {val.fat}g</div>
                    <div>Carbs: {val.carbs}g</div>
                  </div>
                </div>
                )}
              </div>
            </Col>
            <Col xs={8}>
              <div className="graph-card">
                <Doughnut data={data} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Graphs;