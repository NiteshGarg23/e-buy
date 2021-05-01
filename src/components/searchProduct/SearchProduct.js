import React from 'react';
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const SearchProducts = (props) => {
    const { products } = useSelector(mapState);
    
    if(!Array.isArray(products)) return null;
    if(products.length < 1){
        return(
            <div className="productsList">
                <p>
                    No search results
                </p>
            </div>
        )
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
                                                >
                                                    Add to cart
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

export default SearchProducts;
