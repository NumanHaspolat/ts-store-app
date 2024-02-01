import React from "react";
import { useAppSelector } from "../app/hooks";
import Card from "../components/Card";

const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.products);
  console.log(favorites);
  return (
    <div>
      Favorites
      <div className="flex justify-center items-center flex-wrap gap-3 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Add Favorites"
            item={item}
            handleFunc={handleAdd}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
