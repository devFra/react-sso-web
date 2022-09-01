import { React } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './login.scss';

import { useAuthentication } from "../../hooks/useAuth";




const Login = () => {
    const { signInFederated} = useAuthentication();

    return (
        <Card>
            <Card.Body className="social-login-box">
                SignIn with: 
                <Button variant="primary" onClick={ () => signInFederated('Google')} >Google</Button>
            </Card.Body>
        </Card>
    );
}





export default Login;