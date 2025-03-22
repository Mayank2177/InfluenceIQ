import React from "react";

const Nav = () => {
    return(
        <>
            <div className="nav">
                <div className="nav-logo">
                    <h1>LOGO</h1>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="#">Ranking</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <div className="nav-btn">
                                <h4>sign in</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav