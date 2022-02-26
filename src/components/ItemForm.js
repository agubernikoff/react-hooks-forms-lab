import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function handleInputChange(e) {
    setItemName(e.target.value);
  }

  function handleCategoryChange(e) {
    setItemCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    onItemFormSubmit(newItem);
  }
  return (
    <form className="NewItem" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e) => handleInputChange(e)} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e) => handleCategoryChange(e)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
