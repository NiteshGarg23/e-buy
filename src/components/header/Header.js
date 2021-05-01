import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOutUserStart } from '../../redux/User/user.actions'

import Button from '@material-ui/core/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  const displayName = currentUser ? currentUser.displayName : " ";

  const signOut = () => {
    dispatch(signOutUserStart());
  }

  return(
    <header className="mui-appbar mui--z1">
      <div className="mui-container">
        <table>
          <tbody>
            <tr className="mui--appbar-height">
              <td className="mui--text-title">
                <h2>Hello {displayName}</h2>
              </td>
              <td>
                <Link to='/home'>
                  <Button 
                    variant="contained"
                    color="primary"
                  >
                    Home 
                  </Button>
                </Link>
              </td>
              <td>
                <Link to='/search'>
                  <Button 
                    variant="contained"
                    color="primary"
                  >
                    Search 
                  </Button>
                </Link>
              </td>
              <td>
                <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() => signOut()}
                >
                  Logout 
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </header>
  );
}

Header.defaultProps = {
  currentUser: null
}

export default Header;
