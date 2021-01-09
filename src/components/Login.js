import React from "react";
import styled from 'styled-components';
import { loginUrl } from '../spotify';

const Login = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    
h1 {
    margin: 10px;
    color: white;
}
`;

const LoginButton = styled.a`
    font-size: 14px;
    padding: 16px 48px 18px;
    margin: 20px;
    border-radius: 500px;
    background-color: #1db954;
    color: white;
    font-weight: 700;
    display: inline-block;
    letter-spacing: 2px;
    text-align: center;
    text-decoration: none;
`;

function LoginPage() {
    return (
        <Login>
            <h1>Spotifyed</h1>
            <LoginButton href={loginUrl}>LOGIN WITH SPOTIFY</LoginButton>
        </Login>
    )
}

export default LoginPage;