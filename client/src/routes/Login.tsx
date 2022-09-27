import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginInterface } from "../interface/registerInterface";
import '../style/login.scss'

function Login() {
    const [user, setUser] = useState<loginInterface>({
        email: "",
        password: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({ email: "", password: "" });
    };

    if (user.email === "admin@gmail.com" && user.password === "1234") {
        // navigate('/main')
        console.log('working');
    }

    return (
        <>
            <div className="login-wrapper">
                <div className="login-box">
                    <div>
                        <h1><span>Be</span> Behance</h1>
                    </div>
                    <div className="login-container">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <p className="btn-socialMedia btn-google">Continue with Google</p>
                            <p className="btn-socialMedia btn-facebook">Continue with Facebook</p>
                            <p className="btn-socialMedia btn-apple">Continue with Apple</p>
                            <p id="hr">-----------------or-------------------</p>
                            <input
                                type="email"
                                name="email"
                                value={user.email || ""}
                                placeholder="Enter your email"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                value={user.password || ""}
                                placeholder="Enter your password"
                                onChange={handleChange}
                            />
                            <p className="link">Don't have an account yet ? <Link to={'/register'} >Register</Link></p>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;