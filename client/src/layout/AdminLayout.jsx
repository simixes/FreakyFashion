import '../components/Global/Style.css';
import { Outlet, useNavigate } from "react-router-dom";

const adminText = { 
    header: "Administration", 
    sideBar: "Produkter" 
};

const AdminLayout = () => {

  const navigate = useNavigate();
  
    return (
      <main className="admin">
        <div className="admin-grid" id="header">{adminText.header}</div>
        <div className="admin-grid" id="side-bar">{adminText.sideBar} <br></br>
          <button onClick={() => navigate("/")} 
            style={{ 
            backgroundColor: "white", 
            color: "black", 
            padding: "10px 20px", 
            border: "1px solid black", 
            borderRadius: "4px", 
            cursor: "pointer",
            margin: "40px 0 0 0",
            fontWeight: "bold",
            fontSize: "16px" }}>
            Hem 
          </button>
        </div>
        <div className="admin-grid" id="add-new">
          <Outlet />
        </div>
      </main>
    );
  };
  
  export default AdminLayout;