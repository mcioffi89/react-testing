import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

function Dettaglio() {
    const history = useHistory()

    const { id } = useParams()

    const [profile, setProfile] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        if (id) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then(res => {

                    const user = res.data;
                    setProfile({
                        name: user.name,
                        email: user.email
                    });
                })
        }
    }, [id])

    const mySubmitHandler = async (event) => {
        event.preventDefault();
        if (id) {
            await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, profile)
                .then(res => {
                    console.log('Edit')
                })
        } else {
            await axios.post(`https://jsonplaceholder.typicode.com/users`, profile)
                .then(res => {
                    console.log('Save');
                })
        }
        history.push('/lista')
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setProfile({
            ...profile,
            [name]: value
        });
    }

    return (
        <Form onSubmit={mySubmitHandler}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" placeholder="Enter name" id="name" value={profile.name} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Email" id="email" value={profile.email} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Dettaglio