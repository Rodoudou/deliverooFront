import React from "react";
import Meal from "./Meal";

const Category = props => {
  // console.log(props.name)
  // console.log(props.meals)
  // console.log(props.setSelectedProducts)
  return (
    <>
      <h3>{props.name}</h3>
      <div className="meals-container">
        {props.meals.map((meal, index) => {
          // transmettre toutes les clés de meal en tant que props
          // revient à faire <Meal title={meal.title} description={meal.description} price={meal.price}  />
          return (
            <Meal
              {...meal}
              setSelectedProducts={props.setSelectedProducts}
              selectedProducts={props.selectedProducts}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;
