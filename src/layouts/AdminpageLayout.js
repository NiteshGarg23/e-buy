import React from 'react';
import Header from '../components/header/Header';

const AdminpageLayout = (props) => {
    return(
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default AdminpageLayout;