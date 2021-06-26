import { Nav, Navbar } from "react-bootstrap"

function NavigationBar() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/lista">Lista</Nav.Link>
                    <Nav.Link href="/dettaglio">Profilo</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar