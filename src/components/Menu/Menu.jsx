import React from "react";

const Menu = ({ menu }) => (
  <ul>
    {menu.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default Menu;
