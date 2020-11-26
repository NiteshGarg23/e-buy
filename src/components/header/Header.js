import React from "react"

function Header(){

    const username = sessionStorage.getItem("manufac-username")

    return(
        <header class="mui-appbar mui--z1">
            <div class="mui-container">
                <table>
                    <tr class="mui--appbar-height">
                    <td class="mui--text-title"><h2>Hello {username}</h2></td>
                    </tr>
                </table>
            </div>
        </header>
    );
}

export default Header;
