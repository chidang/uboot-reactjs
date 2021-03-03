import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from "react-bootstrap";

const HtmlMessage = () => {
    const [alert, setAlert] = useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
            <SweetAlert
            title={<span>HTML <small>Title</small>!</span>}
            onConfirm={hideAlert}
            onCancel={hideAlert}
          >
            <span>A custom <span style={{color:'#F8BB86'}}>html</span> message.</span>
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

export default HtmlMessage;
