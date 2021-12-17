import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar,Button, Container,Nav,Form,FormControl, Modal, ModalTitle, ModalBody,ModalFooter} from "react-bootstrap"
import ModalHeader from 'react-bootstrap/esm/ModalHeader';



const Navigation = () => {

    const [show, setshow] = useState()

    const handleClose=()=>setshow(false)
    const handleShow =()=>setshow(true)

    return (

        <>
            <Navbar bg='dark' variant='dark' fixed='top'>
                <Container>
                   <Navbar.Brand  href='#logo'text-bg='white'>MovieAPI</Navbar.Brand> 
                   <Navbar.Toggle aria-controls='basic-navbar-nav'/> 
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href='#home'>Home</Nav.Link>
                            <Nav.Link href='#home'>Service</Nav.Link>
                            <Nav.Link href='#home'>Contact</Nav.Link>
                        </Nav>
                        <Form className='d-flex'>
                            <FormControl type='Search' placeholder='Search' className='me-2'arial/>  
                            <Button variant="outline-success">Search</Button> 
                        </Form>
                    </Navbar.Collapse> 
                    <Button variant="primary" onClick={handleShow}>Regist</Button>          
                </Container>
            </Navbar>
            
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <ModalHeader closeButton>
                    <ModalTitle>Modal Title</ModalTitle>
                </ModalHeader>
                <ModalBody>EIRRIIFIJKVMXLVLXMVLMKLMGVLKMKLML</ModalBody>
                <ModalFooter>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='success' > Enviar</Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default Navigation;