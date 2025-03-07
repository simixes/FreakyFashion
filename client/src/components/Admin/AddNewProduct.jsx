const AddNewProduct = () => {

    return (
        <div>
        <form className="admin-form" id="adminForm">
          <label for="itemName">Namn</label><br />
          <input
            type="text"
            id="itemName"
            name="name"
            maxlength="50"
            placeholder="Ange namn"
            required
          /><br />

          <label for="description">Beskrivning</label><br />
          <textarea
            id="description"
            name="description"
            rows="10"
            cols="60"
            maxlength="600"
            placeholder="Ange beskrivning"
            required
          ></textarea><br />

          <label for="img-file">Bild</label><br />
          <input
            type="text"
            id="imgFile"
            name="filen"
            accept="image/*"
            placeholder="images/Products/.."
            required
          /><br />

          <label for="adminSku">SKU</label><br />
          <input
            type="text"
            id="adminSku"
            name="sku"
            maxlength="600"
            pattern="[A-Za-z]{3}[0-9]{3}"
            placeholder="Ange SKU: ABC123"
            required
          /><br />

          <label for="itemBrand">Brand</label><br />
          <input
            type="text"
            id="itemBrand"
            name="brand"
            maxlength="600"
            placeholder="FreakyBrand"
            required
          /><br />

          <label for="itemPrice">Pris</label><br />
          <input
            type="text"
            name="price"
            id="itemPrice"
            pattern="[0-9]+"
            placeholder="Ange pris"
            required
          /><br />

          <button id="newProductBtn">Lägg till produkt</button>

        </form>
      </div>
    );

}

export default AddNewProduct;