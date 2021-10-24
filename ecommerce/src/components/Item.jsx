import React from "react";

const Item = ({ desc }) => {
  return (
    <div>
      <td>{desc.title}</td>
      <td>{desc.description}</td>
      <td>{desc.price}</td>
      <td>
        <img src={desc.pictureUrl} alt="something"></img>
      </td>
    </div>
  );
};

export default Item;
