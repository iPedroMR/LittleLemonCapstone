import React from "react";
import foodImage from "../images/food.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header role="banner">
      <section className="header-content">
        <div className="header-text">
          <h2>Little Lemon</h2>
          <h3>São Paulo</h3>
          <p>
            In the bustling streets of São Paulo, amidst the vibrant energy of
            Brazil, our story begins. As Italian immigrants, we've brought a
            slice of our homeland to this bustling metropolis. Our restaurant is
            more than just a place to dine; it's a sanctuary where the aromas of
            Italy mingle with the spirit of São Paulo. Here, traditional recipes
            from our ancestors find new life, infused with the vibrant flavors
            and influences of our adopted home. Step inside, and let us take you
            on a journey through time and taste, where every dish tells a story
            of resilience, heritage, and the beauty of blending cultures.
          </p>
          <Link to="/Booking">
            <button aria-label="Reserve Table">Reserve Table</button>
          </Link>
        </div>
        <div className="header-image">
          <img src={foodImage} alt="Delicious Italian Food" />
        </div>
      </section>
    </header>
  );
};

export default Header;
