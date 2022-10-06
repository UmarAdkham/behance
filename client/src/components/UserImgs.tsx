import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../hook/hook'

function UserImgs() {
    let userId = useAppSelector((state) => { return state.user._id })
    let [imgs, setImgs] = useState<any[]>
        ()
    useEffect(() => {
        axios.post('http://localhost:5000/api/photos/userPhotos', userId).then((res) => {
            console.log(res);

        })
    }, [])


    return (
        <div>

        </div>
    )
}

export default UserImgs