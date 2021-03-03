import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from "react-bootstrap";

const SuccessMessage = () => {
    const [alert, setAlert] = useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
            <SweetAlert success title="Good job!" onConfirm={hideAlert} onCancel={hideAlert}>
            You clicked the button!
            </SweetAlert>
        );
    }

    return (
        <>
            {alert}
            <Button color="rose" onClick={successAlert}>
                Try me!
            </Button>
        </>
    );
}

export default SuccessMessage;
