import React from "react";
import { Product } from "../models/models";

interface ICards {
  item: Product;
  text: string;
  handleFunc: (item: Product) => void;
}

const Card: React.FC<ICards> = ({ item, text, handleFunc }) => {
  return (
    <div className="w-10/12 sm:w-6/12 md:w-4/12 lg:w-3/12 flex flex-col justify-between bg-white rounded-md">
      <div>
        <h2>{item.title}</h2>
        <p className="line-clamp-1">{item.description}</p>
      </div>
      <img src={item.images[0]} alt={item.title} />
      <div>
        <h3>${item.price}</h3>
        <button className="animate-bounce" onClick={() => handleFunc(item)}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default Card;