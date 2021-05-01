import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStart, deleteProductStart } from '../../redux/Products/products.actions'
import './fetchProducts.scss'

import Button from '@material-ui/core/Button';

const mapState = ({ productsData }) => ({
    products: productsData.products
});


const FetchProducts = (props) => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
          fetchProductsStart()
        );
    
    }, [])

    const deleteProduct = (documentID) => {
        // e.preventDefault();
        dispatch(deleteProductStart(documentID));
    }

    return(
        <div className="productsList">
            <table border="0" cellPadding="0" cellSpacing="0">
                <tr>
                    <th>
                        <h1>
                            Products List
                        </h1>
                    </th>
                </tr>
                <tr>
                    <td>
                        <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                                {products.map((product, index) => {
                                    const { 
                                        productName, 
                                        productImage, 
                                        productPrice, 
                                        documentID 
                                    } = product;

                                    return(
                                        <tr>
                                            <td>
                                                <img className="thumb" src={productImage} />
                                            </td>
                                            <td>
                                                { productName }
                                            </td>
                                            <td>
                                                ${ productPrice }
                                            </td>
                                            <td>
                                                <Button 
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={() => {
                                                        const canDelete = window.confirm(
                                                            "Do you really want to remove this?"
                                                        )
                                                        if(canDelete){
                                                            deleteProduct(documentID)}
                                                        }
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default FetchProducts;
