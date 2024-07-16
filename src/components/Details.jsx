import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="flex justify-between items-center w-[70%] h-full m-auto  p-[10%]">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        className="w-[40%] h-[80%] object-contain"
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          Title asdasfasdfasd afdsd fsdf sfsa fasfsdf
        </h1>
        <h3 className="text-zinc-400 my-5">Category</h3>
        <h2 className="text-red-300 mb-3">Price</h2>
        <p className="mb-[5%]">
          Description sdfbsafgs asfvsdfsdfsdafgsgfa fagdsfg sjsfsdfgs sdfgsg
          fssderthergssg dsgsdfiuweyegsbsmc sagdfsagf dafsg
          gfasdgfsadfgsrgewrgweg agdasygfwegrfsvsdfasavfsdygf dakfeyfwegfefgse
          gfgaf
        </p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Details;
