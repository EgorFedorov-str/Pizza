import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";
import React from "react";
import styles from "./styles.module.css";

const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.root}>
      <div>{restaurant.name}</div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
};

export default Restaurant;
