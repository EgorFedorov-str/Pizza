import React from "react";

const Restaurants = ({ restaurants }) => (
  <div>
    <h2>Restaurants</h2>
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <div>{restaurant.name}</div>
          {/*  Add Menu Component  */}
          {/*  Add Reviews Component  */}
        </div>
      ))}
    </div>
  </div>
);

export default Restaurants;
