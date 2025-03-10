import { useState } from "react";

const AddNewProduct = () => {

  const handleSubmit = (event) => {

    event.preventDefault();

    const item = {...formData};

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
     .then(resp => {
      console.log("Produkt tillagd");
     });
  }

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    sku: "",
    brand: "",
    price: ""
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

    return (
        <div>
        <form className="admin-form" id="adminForm" onSubmit={handleSubmit}>
          <label htmlFor="itemName">Namn</label><br />
          <input
            type="text"
            id="itemName"
            name="name"
            maxLength="50"
            placeholder="Ange namn"
            required
            value={formData.name}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="description">Beskrivning</label><br />
          <textarea
            id="description"
            name="description"
            rows="10"
            cols="60"
            maxLength="600"
            placeholder="Ange beskrivning"
            required
            value={formData.description}
            onChange={handleInputChange}
          ></textarea><br />

          <label htmlFor="img-file">Bild</label><br />
          <input
            type="text"
            id="imgFile"
            name="image"
            accept="image/*"
            placeholder="/images/Products/.."
            required
            value={formData.image}
            onChange={handleInputChange}

          /><br />

          <label htmlFor="adminSku">SKU</label><br />
          <input
            type="text"
            id="adminSku"
            name="sku"
            maxLength="600"
            pattern="[A-Za-z]{3}[0-9]{3}"
            placeholder="Ange SKU: ABC123"
            required
            value={formData.sku}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="itemBrand">Brand</label><br />
          <input
            type="text"
            id="itemBrand"
            name="brand"
            maxLength="600"
            placeholder="FreakyBrand"
            required
            value={formData.brand}
            onChange={handleInputChange}
          /><br />

          <label htmlFor="itemPrice">Pris</label><br />
          <input
            type="text"
            name="price"
            id="itemPrice"
            pattern="[0-9]+"
            placeholder="Ange pris"
            required
            value={formData.price}
            onChange={handleInputChange}
          /><br />

          <button id="newProductBtn" >Lägg till produkt</button>

        </form>
      </div>
    );

}

export default AddNewProduct;