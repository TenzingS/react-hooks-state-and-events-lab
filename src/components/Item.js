import React, { useState } from "react";

function Item({ name, category }) {
  const[add, setAdd] = useState(false)

  function handleAdd(){
    setAdd(!add)
  }

  const itemClass = add ? "in-cart" : ""

  return (
    <li className= {itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick= {handleAdd}
      className="add">{!add ? <p>Add to Cart</p> : <p>Remove From Cart</p>}</button>
    </li>
  );
}

export default Item;
