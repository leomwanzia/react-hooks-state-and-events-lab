import React from "react";

function Item({ name, category }) {

  function addToCartClick() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartClick}>{inCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
