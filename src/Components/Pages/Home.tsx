import axios from 'axios'
import React, { useEffect, useState } from 'react'

const URL = process.env.REACT_APP_GITHUB_URL;
const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN || 'token';

function Home() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`${URL}/users`)
            .then((data: any) => {
                setUsers(data)
                console.log(data)
            })
    }, [])

    return (
        <ul>
            {/* {users.map((user) => (
                <li></li>
            ))} */}
        </ul>
    )
}

export default Home