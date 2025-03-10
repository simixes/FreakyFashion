import "../components/Global/Style.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const adminText = {
  header: "Administration",
  sideBar: "Produkter",
};

const AdminLayout = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <main className="admin">
      <div className="admin-grid" id="header">
        {adminText.header}
      </div>
      <div className="admin-grid" id="side-bar">
        {adminText.sideBar} <br></br>
        <button
          onClick={() => navigate("/")}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            border: "1px solid black",
            borderRadius: "4px",
            cursor: "pointer",
            margin: "40px 0 0 0",
            fontWeight: "bold",
            fontSize: "16px",
            opacity: hover ? 0.3 : 1, 
            transition: "opacity 0.3s ease",
          }}
        >
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
