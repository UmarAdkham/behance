import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hook/hook";
import { loginInterface } from "../interface/registerInterface";
import { setUserId } from "../redux/userIdSlise";
import google from "../img/google.svg"
import apple from "../img/apple.png"
import facebook from "../img/facebook.png"
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

            if (res.status === 200) {
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
                            <p className="btn-socialMedia btn-google"> <img src={google} alt="404" width={20} height={20} /> Google orqali kirish</p>
                            <p className="btn-socialMedia btn-facebook"> <img src={facebook} alt="404" width={20} height={20} /> Facebook Orqali kirish</p>
                            <p className="btn-socialMedia btn-apple"> <img src={apple} alt="404" width={20} height={20} /> Apple orqali kirish</p>
                            <p id="hr">-----------------yoki-------------------</p>
                            <input
                                type="email"
                                name="email"
                                value={user.email || ""}
                                placeholder="Emailingizni kiriting"
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="parol"
                                value={user.parol || ""}
                                placeholder="Parolingizni kiriting"
                                onChange={handleChange}
                            />

                            <p className="link">Ro'yxatdan hali ham o'tmaganmisiz ? <Link to={'/register'} >Register</Link></p>
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