import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      const products = [
        {
          id: 1,
          title: "COD BLACK OPS",
          description: "Shooter FPS",
          price: 30,
          pictureUrl:
            "http://fc02.deviantart.net/fs70/f/2010/329/4/e/call_of_duty_black_ops_multi_by_fred128-d33leo6.png",
        },
        {
          id: 2,
          title: "COD BLACK OPS COLD WAR",
          description: "Shooter FPS",
          price: 50,
          pictureUrl:
            "https://lh3.googleusercontent.com/proxy/38GiQlln-0OPxNez4huBn8csMfnGS1RC16wQCc5mNimJ7SuFXa1hrDE5k-NS3RXwCJMm3tQJ7Tnb8VQx2gredfbiH0Pj2VEL6Do56Vj31BjKm6Db978a",
        },
        {
          id: 3,
          title: "COD VANGUARD",
          description: "Shooter FPS",
          price: 70,
          pictureUrl:
            "http://2.bp.blogspot.com/-euNt7mCCpqU/Vvx8ktmIu1I/AAAAAAAACXI/C5-0rwal8KseUNoE0m0tFPl0n8SX3KHmg/s1600/coleccion-call-of-duty-pc-mega-bajarjuegospcgratis-1-link.png",
        },
      ];
      setTimeout(resolve(products), 3000);
    });

    promise.then((result) => {
      setProducts(result);
    });
  }, [product]);
  return (
    <div>
      <ItemList items={product} />
    </div>
  );
};

export default ItemListContainer;
