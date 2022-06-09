import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import Reviews from "../components/Reviews/Reviews";

import styles from "./styles.module.css";

const Restaurants = ({ restaurants }) => {
  const [activeRestaurant, setActiveRestaurant] = useState({ active: 0 });

  const openNextRestaurant = () => {
    setActiveRestaurant({ active: activeRestaurant.active + 1 });
  };

  if (!restaurants.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h2>Restaurants</h2>
      <button onClick={openNextRestaurant}>Next Restaurant</button>
      <div>
        <div key={restaurants[activeRestaurant.active].id}>
          <div>{restaurants[activeRestaurant.active].name}</div>
          <Menu menu={restaurants[activeRestaurant.active].menu} />
          <Reviews reviews={restaurants[activeRestaurant.active].reviews} />
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
