import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from "react-bootstrap";

const TitleWithTextUnder = () => {
    const [alert, setAlert] = useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
            <SweetAlert title="Here's a message!" onConfirm={hideAlert} onCancel={hideAlert}>
                It's pretty, isn't it?
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

export default TitleWithTextUnder;
