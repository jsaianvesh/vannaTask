import React, { useState, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Form1 = () => {
  const [product, setProduct] = useState(JSON.parse(localStorage.getItem('product')) || []);
  let navigate = useNavigate();

  useEffect(() => {
    const json = JSON.stringify(product);
    localStorage.setItem("product", json);
  }, [product]);


  useEffect(() => {
    const json = localStorage.getItem("product");
    const savedProducts = JSON.parse(json);
    if (savedProducts) {
      setProduct(savedProducts);
    }
  }, []);

  const addProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random().toString(36).substr(2, 9),
      productName: e.target.productName.value,
      description: e.target.description.value,
      img: e.target.img.value,
      price: e.target.price.value,
      ratings: e.target.ratings.value,
      category: e.target.category.value,
    };
    setProduct([...product, newProduct]);
    e.target.productName.value = "";
    e.target.description.value = "";
    e.target.img.value = "";
    e.target.price.value = "";
    e.target.ratings.value = "";
    e.target.category.value = "none";
  };

  const openBooks = () => {
    navigate("/");
  };

  return (
    <div className="mainform">
      <div className="form">
        <form onSubmit={addProduct}>
          <h1>Enter Product Details</h1>
          <div>
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              name="productName"
              className="text"
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              className="text"
            />
          </div>
          <div>
            <label>Product Image</label>
            <input
              type="text"
              placeholder="Product Image"
              name="img"
              className="text"
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="text"
            />
            <div>
              <label>Ratings: </label>
              <select name="ratings" placeholder="Rating" className="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div>
            <label>Select Category:</label>
            <select name="category" placeholder="Category" className="select">
              <option value="none">none</option>
              <option value="Thriller">Thriller</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Horror">Horror</option>
            </select>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="submit" className="homeSubmit" onClick={openBooks}>
            Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
