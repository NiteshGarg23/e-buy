import { firestore } from '../../firebase/utils'

export const handleAddProduct = product => {
    return new Promise((resolve, reject) => {
        firestore
        .collection('products')
        .doc()
        .set(product)
        .then(() => {
            resolve();
            alert("product added successfully");
        })
        .catch(err => {
            reject(err);
        })
    })
}

export const handleFetchProducts = (searchValue) => {
    return new Promise((resolve, reject) => {
        
        let ref = firestore.collection('products').orderBy('createdAt')
        
        if(searchValue) ref = ref.where('productName', "==", searchValue)

        ref
        .get()
        .then(snapshot => {
            const productsArray = snapshot.docs.map(doc => {
                return{
                    ...doc.data(),
                    documentID: doc.id
                }
            });
            resolve(productsArray);
        })
        .catch(err => {
            reject(err);
        })
    })
}

export const handleDeleteProduct = documentID => {
    return new Promise((resolve, reject) => {
        firestore
        .collection('products')
        .doc(documentID)
        .delete()
        .then(() => {
            resolve();
            alert("Product removed");
        })
        .catch(err => {
            reject(err);
        })
    });
}