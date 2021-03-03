import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from "react-bootstrap";

const CustomIcon = () => {
    const [alert, setAlert] = useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
            <SweetAlert
                custom
                showCancel
                showCloseButton
                confirmBtnText="Yes"
                cancelBtnText="No"
                confirmBtnBsStyle="primary"
                cancelBtnBsStyle="light"
                customIcon="https://raw.githubusercontent.com/djorg83/react-bootstrap-sweetalert/master/demo/assets/thumbs-up.jpg"
                title="Do you like thumbs?"
                onConfirm={hideAlert}
                onCancel={hideAlert}
          >
            You will find they are up!
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

export default CustomIcon;
