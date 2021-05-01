import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStart } from '../../redux/Products/products.actions'
import '../../components/fetchProducts/fetchProducts.scss'

import SearchProduct from '../../components/searchProduct/SearchProduct'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

const Search = ({  }) => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("")
    
    useEffect(() => {
        dispatch(
          fetchProductsStart()
        );
    
    }, [])

    const searchForProducts = e => {
        dispatch(
            fetchProductsStart({ searchValue })
        );
    }

    return(
        <div className="searchPage">
            <TextField
                variant="outlined"
                margin="normal"
                type="searchValue"
                id="searchVal"
                label="Product name"
                name="searchVal"
                autoComplete="searchVal"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={searchForProducts}
            >
                Go
            </Button>
                
            <SearchProduct />
            
        </div>
    )
};

export default Search;
