import React from 'react';
import AddProduct from '../../components/addProducts/AddProduct'
import FetchProducts from '../../components/fetchProducts/FetchProducts'

const Admin = () => {
    return(
        <div>
            <AddProduct />
            <br />
            <h3>All products</h3>
            <FetchProducts />
        </div>
    )
}

export default Admin;