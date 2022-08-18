import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './login.scss';

export class Login extends React.Component {

    login(){
        
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