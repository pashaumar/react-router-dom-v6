import React from "react";
import { useOutletContext } from "react-router-dom";

const FeaturedProducts = () => {
  const { message } = useOutletContext();
  return <div>Featured Products : {message}</div>;
};

export default FeaturedProducts;
