import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { checkUserIsAdmin } from '../../Utils'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const AdminToolBar = props => {
    const { currentUser } = useSelector(mapState);
    const isAdmin = checkUserIsAdmin(currentUser);
    if(!isAdmin) return null;

    return(
        <div>
            <Link to="/admin">My Admin</Link>
        </div>
    )
}

export default AdminToolBar;