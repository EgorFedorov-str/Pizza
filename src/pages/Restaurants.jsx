import React, { useEffect, useState, useRef } from "react";
import Menu from "../components/Menu/Menu";
import Reviews from "../components/Reviews/Reviews";

import styles from "./styles.module.css";
import Tabs from "../components/Tabs/Tabs";
import Restaurant from "../components/Restaurant/Restaurant";

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      console.log("scroll");
    };

    ref.current?.addEventListener("scroll", onScroll);

    return () => {
      ref.current?.removeEventListener("scroll", onScroll);
    };
  }, []);

  const selectRestaurant = (index) => {
    if (index === activeRestaurantIndex) {
      setActiveRestaurantIndex(null);
    } else {
      setActiveRestaurantIndex(index);
    }
  };

  if (!restaurants.length) {
    return null;
  }

  const tabs = restaurants.map(({ name }) => name);

  return (
    <div ref={ref} className={styles.root}>
      <h2>Restaurants</h2>
      <Tabs
        tabs={tabs}
        activeTabIndex={activeRestaurantIndex}
        onClick={selectRestaurant}
      />
      {activeRestaurantIndex != null && (
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
      )}
    </div>
  );
};

export default Restaurants;
