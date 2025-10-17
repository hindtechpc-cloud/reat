import React, { useState } from "react";
import { products } from "./data/data";
import Products from "./Products";
export default function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [company_name, setCompanyName] = useState("");
  const [store, setStore] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleStoreChange = (e) => {
    setStore(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    products.push({
      name,
      price,
      store,
      title,
      company_name,
      description,
      image,
    });
   setCompanyName("")
   setName("")
   setStore("")
   setDescription("")
   setPrice("")
   setImage("")
   setTitle("")

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          name="name"
          required={true}
          placeholder="Enter product name"
        />
        <input
          type="text"
          onChange={handlePriceChange}
          value={price}
          name="price"
          required={true}
          placeholder="Enter product price"
        />
        <input
          type="text"
          onChange={handleCompanyNameChange}
          value={company_name}
          name="company_name"
          required={true}
          placeholder="Enter product cp"
        />
        <input
          type="text"
          onChange={handleTitleChange}
          value={title}
          name="title"
          required={true}
          placeholder="Enter product title"
        />
        <input
          type="text"
          onChange={handleDescriptionChange}
          value={description}
          name="description"
          required={true}
          placeholder="Enter product description"
        />
        <input
          type="text"
          onChange={handleImageChange}
          value={image}
          name="image"
          required={true}
          placeholder="Enter product image "
        />
        <input
          type="text"
          onChange={handleStoreChange}
          value={store}
          name="store"
          required={true}
          placeholder="Enter product store"
        />
        <button type="submit">Submit</button>
      </form>
      <Products products={products} />

    </div>
  );
}
