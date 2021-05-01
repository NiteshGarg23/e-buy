import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProductStart } from '../../redux/Products/products.actions'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const AddProduct = (props) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("0.00");

  const resetForm = () => {
    setProductName("");
    setProductImage("");
    setProductPrice("0.00");
  }

  const addNewProduct = e => {
    e.preventDefault();
    dispatch(
      addProductStart({
        productName,
        productImage,
        productPrice
      })
    );

    resetForm();
  }

  return(
    <div>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          type="productName"
          required
          id="productName"
          label="Product Name"
          name="productName"
          autoComplete="productName"
          value={productName}
          onChange={e => setProductName(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          type="productImage"
          required
          id="productImage"
          label="Product Image"
          name="productImage"
          autoComplete="productImage"
          value={productImage}
          onChange={e => setProductImage(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          type="productPrice"
          required
          id="productPrice"
          label="Product Price"
          name="productPrice"
          autoComplete="productPrice"
          value={productPrice}
          onChange={e => setProductPrice(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={addNewProduct}
        >
          Add Product
        </Button>
      </form>
    </div>
  )
}

export default AddProduct;