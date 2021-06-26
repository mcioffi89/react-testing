import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Lista() {

    const history = useHistory()
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                setUsers(users);
            })
    }, [])

    const goToDettaglio = (id) => {
        history.push(`/dettaglio/${id}`)
    }

    return (
        <div>
            <Container fluid="md" >
                <Row >
                    {users.map(u => {
                        return (
                            <Col className="mb-2 mt-2" key={u.id}>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{u.name}</Card.Title>
                                        <Card.Text>
                                            {u.email}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => (goToDettaglio(u.id))}>Edit</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Lista;