import '../Global/Style.css';

const adminText = { 
    header: "Administration", 
    sideBar: "Produkter" 
};


const AdminLayout = ({children}) => {
    return (
      <main className="admin">
        <div className="admin-grid" id="header">{adminText.header}</div>
        <div className="admin-grid" id="side-bar">{adminText.sideBar}</div>
        <div className="admin-grid" id="add-new">
          {children}
        </div>
      </main>
    );
  };
  
  export default AdminLayout;