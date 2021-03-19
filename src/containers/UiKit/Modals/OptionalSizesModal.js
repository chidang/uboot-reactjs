import React, { useState } from "react";
import { Button, Card, Modal } from 'react-bootstrap';

const OptionalSizesModal = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    return (
        <Card className="flex-fill w-100">
            <Card.Header>
                <Card.Title tag="h5">Optional Sizes</Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="bd-callout bd-callout-highlight">
                    <p>You can specify a bootstrap large or small modal by using the <code>size</code> prop.</p>
                </div>
                <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}
                <Button onClick={() => setLgShow(true)}>Large modal</Button>
                <Modal
                    size="sm"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            Small Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default OptionalSizesModal;
