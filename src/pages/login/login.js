import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './login.scss';
import config from '../../aws-exports';
import { Auth, Hub } from 'aws-amplify';

Auth.configure(config);

const Login = () => {

    Hub.listen('auth',(data)=>{
        switch(data.payload.event){
            case 'signIn':
                console.log('Success authentication', data.payload.data);
            break
        }
    });

    return (
        <Card>
            <Card.Body className="social-login-box">
                SignIn with: 
                <Button variant="primary" onClick={doLogin}>Google</Button>
            </Card.Body>
        </Card>
    );
}

const doLogin = () => {
    Auth.federatedSignIn({provider: "Google"});
}

export default Login;