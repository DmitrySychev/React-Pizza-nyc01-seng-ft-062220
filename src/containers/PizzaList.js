import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {


  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
  }

  render() {
    let pizza = this.state.data.map(pizzaObj => <Pizza pizza={pizzaObj} clickHandler={this.props.clickHandler}/>)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" >Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizza
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
