import React from "react";
import { NavLink } from "react-router-dom";
const Products = () => (
  <div>
    <h2>Products Page</h2>
    <ul>
      <li>
        <NavLink to="/products/1">Product 1</NavLink>
      </li>
      <li>
        <NavLink to="/products/2">Product 2</NavLink>
      </li>
      <li>
        <NavLink to="/products/3">Product 3</NavLink>
      </li>
    </ul>
  </div>
);
export default Products;
// Renders a navigation link to the product detail page with id parameter set to 1.
//to attribute of NavLink specifies the URL path for each product
