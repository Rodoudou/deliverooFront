import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import Logo from "./assets/images/deliveroo.png";
import Category from "./components/Category";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faHome } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faHome);

// HTML
// ETATS
// INTERACTIONS
// CSS

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://deliveroofront.herokuapp.com/");
      const data = await response.json();

      setRestaurant(data.restaurant);
      setCategories(data.categories);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <div>
          <div className="header">
            <div className="wrapper">
              <img src={Logo} className="logo" />
            </div>
          </div>

          <div className="wrapper">
            <div className="restaurant-info">
              <div>
                <p>{restaurant.name}</p>
                <p>{restaurant.description}</p>
              </div>
              <img src={restaurant.picture} alt={restaurant.name} />
            </div>
          </div>

          <div className="grey-back">
            <div className="wrapper">
              <div className="restaurant-details">
                <div className="meals">
                  {categories.map((category, index) => {
                    if (category.meals.length === 0) {
                      return null;
                    }
                    return (
                      <Category
                        setSelectedProducts={setSelectedProducts}
                        selectedProducts={selectedProducts}
                        name={category.name}
                        meals={category.meals}
                      />
                    );
                  })}
                </div>
                <div className="basket">
                  {selectedProducts.map(selectedProduct => {
                    return (
                      <div>
                        <p>{selectedProduct.title}</p>
                        <p>{selectedProduct.quantity}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
