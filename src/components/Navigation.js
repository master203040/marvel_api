import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Button,Form,Modal, ModalTitle, ModalBody,ModalFooter} from "react-bootstrap"
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import {BrowserRouter as Router,Link,Route,Switch} from "react-router-dom";


const Navigation = () => {
    //funsion de modal 
    const [show, setshow] = useState()
    const handleClose=()=>setshow(false)
    const handleShow =()=>setshow(true)

    return (

        <>
            
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/Movie">About</Link>
                </nav>
            </header>

            <main>
                <Router>
                    <Switch>
                        <Route path=""></Route>
                        <Route path=""></Route>
                    </Switch>
                </Router>
                
                <Button variant="primary" onClick={handleShow}>Regist</Button> 
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <ModalHeader closeButton>
                        <ModalTitle>Modal Title</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form>
                            <Form.Group className='md-3' controlId='formBasicText'>
                            <Form.Control type="text" placeholder="Name" />
                            <Form.Control type="text" placeholder="LastName" />
                            <Form.Control type="number" placeholder="Age" />
                            </Form.Group>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='secondary' onClick={handleClose}>Close</Button>
                        <Button variant='success' > Enviar</Button>
                    </ModalFooter>
                </Modal>
            </main>

            
        </>
    );
};

export default Navigation;