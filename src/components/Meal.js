import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({
  title,
  description,
  popular,
  price,
  picture,
  selectedProducts,
  setSelectedProducts
}) => {
  // console.log(props.title);
  return (
    <div
      className="meal-container"
      onClick={() => {
        const copy = [...selectedProducts];

        // Est-ce que le produit est deja present dans le panier ?
        let isProductFound = false;
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].title === title) {
            // Le produit est deja present dans le panier
            copy[i].quantity++;
            isProductFound = true;
          }
        }

        if (isProductFound === false) {
          copy.push({ title: title, quantity: 1, price: price });
        }

        setSelectedProducts(copy);

        // Ajouter dans l'état `selectedProducts` un objet qui pourrait avoir cette structure :
        // {title: 'Brunch vegan', quantity: 1, price: 25}
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>{title}</p>
        <p style={{ color: "grey" }}>{description}</p>
        <div className="meal-horizontal">
          <p>{price}</p>
          {popular && (
            <p>
              <FontAwesomeIcon icon="star" /> Populaire
            </p>
          )}
        </div>
      </div>
      {picture && (
        <img src={picture} alt={title} style={{ objectFit: "cover" }} />
      )}
    </div>
  );
};

export default Meal;
