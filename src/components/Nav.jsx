import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";


const Nav = () => {
  const [products] = useContext(ProductContext);
  let categories =
    products && products.reduce((acc, curr) => [...acc, curr.category], []);
  categories = [...new Set(categories)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},
    ${(Math.random() * 255).toFixed()},0.4)`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add new product
      </a>
      <hr className="my-3 w-[80%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w[80%]">
        {categories.map((cat, i) => (
          <Link key={i} to={`/?categories=${cat}`} className="flex items-center mb-3">
            <span
              style={{ backgroundColor: color() }}
              className="mr-2 rounded-full w-[15px] h-[15px]"
            ></span>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
