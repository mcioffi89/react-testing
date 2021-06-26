import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Lista() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                setUsers(users);
            })
    }, [])

    return (
        <div>
            {users.map(u => <p>{u.name}</p>)}
        </div>
    )
}

export default Lista;