import '../components/Global/Style.css';
import { Outlet } from "react-router-dom";

const adminText = { 
    header: "Administration", 
    sideBar: "Produkter" 
};


const AdminLayout = () => {
    return (
      <main className="admin">
        <div className="admin-grid" id="header">{adminText.header}</div>
        <div className="admin-grid" id="side-bar">{adminText.sideBar}</div>
        <div className="admin-grid" id="add-new">
          <Outlet />
        </div>
      </main>
    );
  };
  
  export default AdminLayout;