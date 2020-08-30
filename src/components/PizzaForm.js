import React from "react"



const PizzaForm = (props) => {


  return(
      <div className="form-row" >
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={ props.data.topping } onChange={props.toppingHandler}/>
        </div>
        <div className="col">
          <select name='size'value={props.data.size} className="form-control" onChange={props.sizeHandler}>
            <option value="Small" >Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={props.data.vegetarian ? true : false} onChange={props.vegetarianHandler}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={props.data.vegetarian ? false : true} onChange={props.vegetarianHandler}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitHandler} >Submit</button>
        </div>
        <span>{console.log(props.data.vegetarian)}</span>
      </div>
     
  )
}

export default PizzaForm
