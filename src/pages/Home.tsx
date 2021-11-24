import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../redux/auth/actions";

const Home = () => {
    const dispatch = useDispatch();

    const user = localStorage.getItem("userLogin");

    const history = useHistory();

    const handleSignin = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        history.push("/login");
    };

    const handleLogout = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(logout());
    };

    return (
        <div className="home">
            {!user ? (
                <>
                    <h1>Welcome to my app!</h1>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={(e) => handleSignin(e)}
                    >
                        Sign in
                    </Button>
                </>
            ) : (
                <>
                    <h1>Congratulations! You have successfully logged in.</h1>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={(e) => handleLogout(e)}
                    >
                        Log out
                    </Button>
                </>
            )}
        </div>
    );
};

export default Home;
