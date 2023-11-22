import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">ELECTRONIC BLOCKCHAIN VOTING SYSTEM</h1>
            <button className="login-button" onClick = {props.connectWallet}>LOGIN CRYPTO-WALLET</button>
        </div>
    )
}

export default Login;