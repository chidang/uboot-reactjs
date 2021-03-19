import React, { useState } from "react";
import { Button, Card, Modal } from 'react-bootstrap';

const BasicModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">Basic Modal</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="bd-callout bd-callout-highlight">
                    <p>A modal with header, body, and set of actions in the footer. Use <code>&lt;Modal/&gt;</code> in combination with other components to show or hide your Modal. The <code>&lt;Modal/&gt;</code> Component comes with a few convenient "sub components": <code>&lt;Modal.Header/&gt;</code>, <code>&lt;Modal.Title/&gt;</code>, <code>&lt;Modal.Body/&gt;</code>, and <code>&lt;Modal.Footer/&gt;</code>, which you can use to build the Modal content.</p>
                </div>    
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
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

export default BasicModal;
