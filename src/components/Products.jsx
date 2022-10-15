import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  const message = "hello nested route";
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet context={{ message }} />
    </>
  );
};

export default Products;
