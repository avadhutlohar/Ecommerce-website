import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);
  // const getProductsCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setFilteredProducts(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    if (!filteredProducts || category == "undefined") {
      setFilteredProducts(products);
    }
    if (category != "undefined") {
setFilteredProducts(products.filter((p) => p.category == category));
      // getProductsCategory();
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="flex flex-wrap overflow-x-hidden overflow-y-auto h-full w-[85%] p-10 pt-[5%]">
        {filteredProducts && filteredProducts.map((p, i) => (
          <Link
            key={p.id}
            to={`/details/${p.id}`}
            className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center "
          >
            <div
              className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center rounded"
              style={{
                backgroundImage: `url(${p.image})`,
              }}
            ></div>
            <h1 className="hover:text-blue-300 ">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Nav />
  );
};

export default Home;
