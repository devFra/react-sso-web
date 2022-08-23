import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './login.scss';
import config from '../../aws-exports';
import { Auth, Hub } from 'aws-amplify';

Auth.configure(config);

export class Login extends React.Component {

   constructor(props){
    super(props);
   }

    login(){

        

        Auth.federatedSignIn({ provider: "Google", });
   
    }

    render(){
        return (
            <Card>
                <Card.Body className="social-login-box">
                    SignIn with: 
                    <Button variant="primary" onClick={this.login}>Submit</Button>
                </Card.Body>
            </Card>

        );
    }
}