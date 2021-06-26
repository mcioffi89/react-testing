import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function Contatore() {
    const { initalValue } = useParams()

    const [contatore, setContatore] = useState(Number(initalValue))

    const [vittorio, setVittorio] = useState('sano')

    useEffect(() => {
        console.log(contatore)
        return () => {
            setVittorio('sano')
        }
    }, [contatore])

    return (
        <div>
            <p>Hai cliccato {contatore} volte</p>
            <Button onClick={() => setContatore(contatore + 1)}>
                Cliccami
            </Button>
            <p>Vittorio è {vittorio}</p>
            <Button variant="primary" onClick={() => setVittorio('un porco')}>
                Cliccami
            </Button>
        </div>
    )
}

export default Contatore;