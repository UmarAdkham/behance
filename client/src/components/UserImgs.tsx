import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hook/hook'
import UserimgRow from './UserimgRow'
import '../style/Userimgs.scss'

function UserImgs() {
    let userId = useAppSelector((state) => { return state.user._id })
    let [imgs, setImgs] = useState<any[]>([])

    useEffect(() => {
        axios.post('http://localhost:5000/api/photos/userPhotos', { _id: userId }).then((res) => {
            setImgs(res.data)
        })
    }, [])


    return (
        <div className='userImg_continer' >
            {imgs.map(value => <UserimgRow key={value._id} _id={value._id} url={value.url} />)}
        </div>
    )
}

export default UserImgs