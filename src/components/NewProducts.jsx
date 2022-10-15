import React from "react";
import { useOutletContext } from "react-router-dom";

const NewProducts = () => {
  const { message } = useOutletContext();
  return <div>New Products - {message}</div>;
};

export default NewProducts;
