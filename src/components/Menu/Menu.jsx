import React from "react";
import Product from "../Product/Product";
import styles from "./styles.module.css";

const Menu = ({ menu }) => (
  <div className={styles.root}>
    {menu.map(({ id, name }) => (
      <Product key={id} name={name} className={styles.product} />
    ))}
  </div>
);

export default Menu;
