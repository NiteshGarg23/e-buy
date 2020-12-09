import React from "react"
import { connect } from 'react-redux'

const Header = (props) => {

    const { currentUser } = props;

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

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps, null)(Header);
