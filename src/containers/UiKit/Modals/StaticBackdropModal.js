import React, { useState } from "react";
import { Button, Card, Modal } from 'react-bootstrap';

const StaticBackdropModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">Static backdrop</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="bd-callout bd-callout-highlight">
                    <p>When backdrop is set to <code>static</code>, the modal will not close when clicking outside it. Click the button below to try it.</p>
                </div> 
                <Button variant="success" onClick={handleShow}>
                    Launch demo modal
                </Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="info">Understood</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default StaticBackdropModal;
