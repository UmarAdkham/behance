import React, { useState } from 'react'
import { registerInterface } from '../interface/registerInterface'
import '../style/register.scss'
function Register() {

    let [regitesr, setRegister] = useState<registerInterface>({
        email: '',
        familiya: '',
        ism: '',
        parol: ""
    })


    const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegister({ ...regitesr, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <form >
                <label htmlFor="email">Email</label>
                <input type="email" name='email' value={regitesr.email || ""} id='email' onChange={handelChange} />
                <label htmlFor="ism">Ism</label>
                <input type="text" name='ism' value={regitesr.ism || ""} id='ism' onChange={handelChange} />
                <label htmlFor="familiya">Familiya</label>
                <input type="text" name='familiya' value={regitesr.familiya || ""} id='familiya' onChange={handelChange} />
                <label htmlFor="parol">Parol</label>
                <input type="text" name='parol' value={regitesr.parol || ""} id='parol' onChange={handelChange} />
                <button>Davom eting</button>
            </form>
        </div>
    )
}

export default Register