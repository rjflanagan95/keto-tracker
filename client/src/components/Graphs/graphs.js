import React, { Component } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { Doughnut } from "react-chartjs-2";

class Graphs extends Component {
  constructor(props) {
    super(props)

    this.state = {

      }
  }

  changeUserInput(target) {
    this.setState({
      [target.name]: target.value
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
            data: [300, 50, 100],
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
          <Doughnut data={data} />
      </div>
    );
  }
}

export default Graphs;