import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

let currentId = 0

class App extends Component {

  state={
    topping: '',
    size: '',
    vegetarian: ''
  }

  sizeHandler = (e) => {
    this.setState({ 
      size: e.target.value
    })
  }

  toppingHandler = (e) => {
    this.setState({ 
      topping: e.target.value
    })
  }

  vegetarianHandler = (e) => {
    e.target.value === "Vegetarian" ? this.setState({ vegetarian: true }) : this.setState({ vegetarian: false })
  }

  clickHandler = (e) => {
    currentId = e.pizza.id
    console.log(currentId)
    this.setState({ 
      topping: e.pizza.topping,
      size: e.pizza.size ,
      vegetarian: e.pizza.vegetarian
    })
  }

  submitHandler = (e, id) => {
    console.log(this.state)
    fetch(`http://localhost:3000/pizzas/${currentId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( this.state )
    })
    .then(window.location.reload(true))
  }

  render() {
    return (

      <Fragment>
        <Header/>
        <PizzaForm toppingHandler={this.toppingHandler} sizeHandler={this.sizeHandler} vegetarianHandler={this.vegetarianHandler} data={this.state} submitHandler={this.submitHandler}/>
        <PizzaList clickHandler={this.clickHandler} />
      </Fragment>
    );
  }

}

export default App;
