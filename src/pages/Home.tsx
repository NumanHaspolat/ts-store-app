import { useEffect, useState } from "react";
import Search from "../components/Search";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProduct,
} from "../features/productsSlice";
import { EventFunction, Product, Products } from "../models/models";
import Card from "../components/Card";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { loading, error, productsList, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      dispatch(getSuccessProduct(data.products));
      console.log(data.products);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  // };

  const handleChange: EventFunction = (e) => {
    setSearch(e.target.value);
  };
  const handleAdd = (pro: Product) => {
    if (favorites.filter((item) => item.id === pro.id).length === 0) {
      dispatch(addFavorites(pro));
    }
  };

  return (
    <div>
      <Search handleChange={handleChange} />
      {loading ? (
        error ? (
          <div>
            <p className="text-center text-red-600">Something Went Wrong</p>
          </div>
        ) : (
          <div>
            <p className="text-center text-red-600">Loading ....</p>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-3 p-5">
          {productsList.map((item) => (
            <Card
              key={item.id}
              text="Add Favorites"
              item={item}
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
