import { useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import { Product, VoidFnc } from "../models/models";
import { removeFavorites } from "../features/productsSlice";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const { favorites } = useAppSelector((state) => state.products);
  // console.log(favorites);
  const dispatch = useDispatch();
  const handleRemove: VoidFnc = (product) => {
    const newData: Product[] = favorites.filter(
      (item) => item.id !== product.id
    );
    dispatch(removeFavorites(newData));
  };

  return (
    <div>
      Favorites
      <div className="flex justify-center items-center flex-wrap gap-3 p-5">
        {favorites.map((item) => (
          <Card
            key={item.id}
            text="Remove"
            item={item}
            handleFunc={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
