import React from "react";
import Login from './login/login';
import "./css/common.css"

export default function LoginPage(props){
    return (

        <div className="login-page">
            <div className="login-panel">
                <div className="login-button">
                    <Login {...props}/>
                </div>
            </div>
        </div>



    )
}