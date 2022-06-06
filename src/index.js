import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Restaurants from "./pages/Restaurants";
import { restaurants } from "./constants/fixtures";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Restaurants restaurants={restaurants} />);

// <div>
//   <h1>
//     <p>Hello!</p>
//   </h1>
//   <span>
//     <p>Caramba</p>
//   </span>
// </div>;
// ===
// React.createElement("div", {
//   children: [
//     React.createElement("h1", {
//       children: [
//         React.createElement("p", {
//           children: ["Hello!"],
//         }),
//       ],
//     }),
//     React.createElement("span", {
//       children: [
//         React.createElement("p", {
//           children: ["Caramba"],
//         }),
//       ],
//     }),
//   ],
// })
