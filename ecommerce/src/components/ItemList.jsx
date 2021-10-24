import React from "react";
import Item from "./Item";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <tr key={item.id}>
          <Item desc={item} />
        </tr>
      ))}
    </div>
  );
};

export default ItemList;
