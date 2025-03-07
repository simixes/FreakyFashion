import { useNavigate } from "react-router-dom";

const AdminProducts = () => {

  const navigate = useNavigate();

    return (
        <div>
          Produkter
          <button className="button-link" id="loadBtn">Ladda produkter</button>
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
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
    );

}

export default AdminProducts;