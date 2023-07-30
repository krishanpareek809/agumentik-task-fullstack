import React from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";


function Navbar() {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

    return (
        <div className="navbar_container">
            <div className="navbar">
                <div className="navbar_left">

                    <div className="navbar_left_logo">
                        <img src="https://img.freepik.com/premium-vector/rounded-letter-c-v-creative-circle-shape-line-art-minimal-logo_649646-1339.jpg?w=2000" />
                        <p>Revamp</p>
                        <p className="navbar_left_logo_blue">CV</p>
                    </div>

                    <div className="navbar_left_items">
                        <p>Home</p>
                        <p>About</p>
                        <p>Create</p>
                        <p>Template</p>
                        <p>Career</p>
                        <p>Blog</p>
                    </div>
    
                </div>

                <div className="navbar_right">
                    {
                        isAuthenticated && <p>{user.name}</p>
                    }
                    {
                        isAuthenticated ? (
                            <p onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>
                        ) : (
                            <p onClick={() => loginWithRedirect()}>Log In</p>
                        )
                    }
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;