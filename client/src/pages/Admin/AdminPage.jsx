import HandleProducts from '../../components/Admin/HandleProducts'

function AdminPage({ products }) {
    return (
        <HandleProducts products={products} />
    );
  }
  
  export default AdminPage;