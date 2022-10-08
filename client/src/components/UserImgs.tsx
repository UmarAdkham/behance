import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hook/hook'
import UserimgRow from './UserimgRow'

function UserImgs() {
    let userId = useAppSelector((state) => { return state.user._id })
    let [imgs, setImgs] = useState<any[]>([])
    console.log(userId);

    useEffect(() => {
        axios.post('http://localhost:5000/api/photos/userPhotos', { _id: userId }).then((res) => {
            setImgs(res.data)
        })
    }, [])


    return (
        <div>
            {imgs.map(value => <UserimgRow key={value._id} _id={value._id} url={value.url} />)}
        </div>
    )
}

export default UserImgs