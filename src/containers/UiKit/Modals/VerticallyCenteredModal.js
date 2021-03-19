import React, { useState } from "react";
import { Button, Card, Modal } from 'react-bootstrap';

const VerticallyCenteredModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">Vertically centered</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="bd-callout bd-callout-highlight">
                    <p>You can vertically center a modal by passing the <code>centered</code> prop.</p>
                </div> 
                <Button variant="warning" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default VerticallyCenteredModal;
