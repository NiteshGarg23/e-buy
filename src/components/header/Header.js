import React from "react"
import { useSelector } from 'react-redux'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Header = (props) => {

    const { currentUser } = useSelector(mapState);

    return(
        <header className="mui-appbar mui--z1">
            <div className="mui-container">
                <table>
                    <tbody>
                        <tr className="mui--appbar-height">
                            <td className="mui--text-title">
                                <h2>Hello {currentUser.displayName}</h2>
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
