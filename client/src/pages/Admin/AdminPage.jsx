import { useEffect } from "react";
import HandleProducts from "../../components/Admin/HandleProducts";

function AdminPage({ products }) {
  
  useEffect(() => {
    document.title = "Administration";
  }, []); 

  return <HandleProducts products={products} />;
}

export default AdminPage;
