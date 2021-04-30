import { takeLatest, put, all, call } from 'redux-saga/effects'
import { auth } from '../../firebase/utils'
import { setProducts, fetchProductsStart } from './products.actions'
import productsTypes from './products.types'
import { handleAddProduct, handleFetchProducts, handleDeleteProduct } from './products.helpers'

export function* addProduct({ payload: { productName, productImage, productPrice } }){
    try{
        const timestamp = new Date();
        yield handleAddProduct({
            productName, 
            productImage, 
            productPrice,
            productAdminUserUID: auth.currentUser.uid,
            createdAt: timestamp
        });
        yield put(fetchProductsStart());

    } catch(err){
        console.log(err)
    }
}

export function* onAddProductStart(){
    yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct)
}

export function* fetchProducts(){
    try{
        const products = yield handleFetchProducts();
        yield put(
            setProducts(products)
        );

    } catch(err){
        console.log(err);
    }
}

export function* onFetchProductsStart(){
    yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts)
}

export function* deleteProduct({ payload }){
    try{
        yield handleDeleteProduct(payload);
        yield put(fetchProductsStart());

    } catch(err) {
        console.log(err);
    }
}

export function* onDeleteProductStart(){
    yield takeLatest(productsTypes.DELETE_PRODUCTS_START, deleteProduct)  
}

export default function* productsSagas(){
    yield all([
        call(onAddProductStart),
        call(onFetchProductsStart),
        call(onDeleteProductStart)
    ])
}