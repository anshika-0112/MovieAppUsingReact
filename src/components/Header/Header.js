import React from "react";
function Header({user}) {
    return(
        <h1>{user.name}</h1>
    );
}

export default Header;