import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminProducts = ({ products }) => {

  const navigate = useNavigate();
  const [showProducts, setShowProducts] = useState(false);

  const loadProducts = () => {
    setShowProducts(true);
  }

    return (
        <div>
          Produkter
          <button className="button-link" id="loadBtn" onClick={() => loadProducts()}>Ladda produkter</button>
          <button className="button-link" id="newProdBtn" onClick={() => navigate("/admin/products/new")}>Ny produkt</button>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Namn</th>
                <th>SKU</th>
                <th>Pris</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
          {!showProducts ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", fontStyle: "italic" }}>
                Ladda produkter för att visa listan
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.item_SKU}>
                <td>{product.item_name}</td>
                <td>{product.item_SKU}</td>
                <td>{product.item_price} kr</td>
                <td>
                  <a href="#"><img src="/images/edit-page-svg.svg" alt="edit" /></a>
                  <a href="#"><img src="/images/trashcan-img-svg.svg" alt="trashcan" /></a>
                </td>
              </tr>
            ))
          )}
            </tbody>
          </table>
        </div>
    );

}

export default AdminProducts;