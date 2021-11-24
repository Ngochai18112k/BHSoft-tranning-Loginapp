import React, { useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/auth/actions";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const userLogin = useSelector((state: RootStateOrAny) => state.auth);
    const { loading, data, error } = userLogin;

    const history = useHistory();

    useEffect(() => {
        if (data.length !== 0) {
            history.push("/");
        }
    }, [history, data]);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(login(username, password));
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button variant="success" type="submit" size="lg">
                {loading ? <i className="fa fa-spinner fa-spin" /> : "Log in"}
            </Button>
        </Form>
    );
};

export default Login;
