import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value );
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    const updatedProducts = products.map((p) => {
      if (p.id == id) {
        return product;
      }
      return p;
    });
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/");
  };

  return (
    <form
      onSubmit={(e) => {
        updateProduct(e);
      }}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="w-1/2 text-3xl font-semibold mb-2 ">Edit Product</h1>
      <input
        type="url"
        placeholder="Image url"
        className="text-xl bg-zinc-50 rounded p-3 w-1/2 mb-3"
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-xl bg-zinc-50 rounded p-3 w-1/2 mb-3"
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <div className="w-1/2 justify-between flex">
        <input
          type="text"
          placeholder="Category"
          className="text-xl bg-zinc-50 rounded p-3 w-[48%] mb-3"
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-xl bg-zinc-50 rounded p-3 w-[48%] mb-3"
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
      </div>
      <textarea
        className="text-xl bg-zinc-50 rounded p-3 w-1/2 mb-3"
        name="description"
        onChange={changeHandler}
        value={product && product.description}
        placeholder="Enter Product Description"
      ></textarea>

      <button className="bg-blue-500 text-white p-3 rounded w-1/2">
        Save Product
      </button>
    </form>
  );
};

export default Edit;
