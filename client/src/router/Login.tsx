import React, { useState } from "react";
import { loginInterface } from "../interface/registerInterface";

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

    if (user.email === "admin" && user.password === "1234") {
        // navigate('/main')
    }

    return (
        <>
            <div className="wrapper">
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input
                            type="email"
                            name="email"
                            value={user.email || ""}
                            placeholder="Enter your username"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            value={user.password || ""}
                            placeholder="Enter your password"
                            onChange={handleChange}
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;