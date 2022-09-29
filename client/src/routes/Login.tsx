import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook/hook";
import { loginInterface } from "../interface/registerInterface";
import { setUserId } from "../redux/userIdSlise";
import '../style/login.scss'

function Login() {
    let naviget = useNavigate()
    let dispatch = useAppDispatch()
    let [text, setText] = useState('')
    const [user, setUser] = useState<loginInterface>({
        email: "",
        parol: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/user/login', user).then((res: any) => {
            console.log(res);

            if (res.status == 200) {
                dispatch(setUserId(res.data.id))
                naviget('/accountPage')
            } else {
                setText('password yoki user name xato')
            }
        })
        setUser({ email: "", parol: "" });
    };

    if (user.email === "admin@gmail.com" && user.parol === "1234") {
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
                                name="parol"
                                value={user.parol || ""}
                                placeholder="Enter your password"
                                onChange={handleChange}
                            />

                            <p className="link">Don't have an account yet ? <Link to={'/register'} >Register</Link></p>
                            <p style={{ textAlign: 'center' }} >{text}</p>
                            <button>Login</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;