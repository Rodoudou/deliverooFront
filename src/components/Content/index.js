import React from "react";
import "./Content.css";
import imageItem from "../../img/item-image.jpg";
import imageItem2 from "../../img/item-image2.jpg";
export default function Content() {
  return (
    <div className="content">
      <div className="Content--center">
        <div className="Menu">
          <div className="MenuItems">
            <h2>Brunch</h2>
            <div className="MenuItem--card">
              <div className="MenuItem--texts">
                <h3>Brunch authentique 1 personne</h3>
                <p>
                  Assiette de jambon cuit, jambon fumeì, terrine, comté bio
                  &amp; camembert bio, salade jeunes pousses, oeuf poché bio,
                  pain bio & confiture, 1 viennoiserie bio au choix, granola
                  parfait bio, jus de fruits 33cl au choix
                </p>
                <div className="MenuItem--infos">
                  <span className="MenuItem--price">25,00€</span>
                  <span className="MenuItem--popular">
                    <i>Populaire</i>
                  </span>
                </div>
              </div>
              <div className="MenuItem--picture">
                {/*   <img src={imageItem} /> */}
              </div>
            </div>
            <div className="MenuItem">
              <div className="MenuItem--card">
                <div className="MenuItem--texts">
                  <h3>Brunch vegan</h3>
                  <p>
                    Falafels bio, houmous bio, avocat aux super graines bio,
                    lentilles au paprika, herbes fraîches, houmous de carotte et
                    légumes de saison, soupe du jour bio, pain bio &amp;
                    confiture, crunola parfait aux fruits de saison, flûte aux
                    raisins et noisettes, jus de fruits 33cl au choix
                  </p>
                  <div className="MenuItem--infos">
                    <span className="MenuItem--price">25€,00</span>
                  </div>
                </div>
                <div className="MeniItem--picture">
                  {/*    <img src={imageItem2} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
