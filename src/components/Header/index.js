import React from "react";
import ImageHeader from "../../img/header-image.jpg";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="RestaurantInfos">
        <div className="RestaurantInfos--center">
          <h1>Le Pain Quotidien - Montorgueil</h1>
          <div className="RestaurantInfos--texts">
            <p>
              Profitez de chaque plaisir de la vie quotidienne. Le Pain
              Quotidien propose des ingrédients simples et sains, du bon pain,
              des fruits et des légumes frais et de saison issus de
              l’agriculture biologique.
            </p>
            <img class="imgHeader" src={ImageHeader} />
          </div>
        </div>
      </div>
    </header>
  );
}
