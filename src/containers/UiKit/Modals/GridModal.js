import React, { useState } from "react";
import { Button, Card, Modal } from 'react-bootstrap';

const GridModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">Using the grid</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="bd-callout bd-callout-highlight">
                    <p>You can use grid layouts within a model using regular grid components inside the modal content.</p>
                </div> 
                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Using Grid in Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid">
                        <div class="container-fluid bd-example-row">
                            <div class="row">
                                <div class="col-md-4">.col-md-4</div>
                                <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
                                <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
                            </div>
                            <div class="row">
                                <div class="col-sm-9">
                                    Level 1: .col-sm-9
                                    <div class="row">
                                        <div class="col-8 col-sm-6">
                                            Level 2: .col-8 .col-sm-6
                                    </div>
                                        <div class="col-4 col-sm-6">
                                            Level 2: .col-4 .col-sm-6
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default GridModal;
