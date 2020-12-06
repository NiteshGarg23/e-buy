import React from "react"

const Header = (props) => {

    const { currentUser } = props;

    return(
        <header class="mui-appbar mui--z1">
            <div class="mui-container">
                <table>
                    <tr class="mui--appbar-height">
                    <td class="mui--text-title"><h2>Hello {currentUser}</h2></td>
                    </tr>
                </table>
            </div>
        </header>
    );
}

Header.defaultProps = {
    currentUser: null
}

export default Header;
