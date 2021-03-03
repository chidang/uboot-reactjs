import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from "react-bootstrap";

const Timer = () => {
    const [alert, setAlert] = useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const successAlert = () => {
        setAlert(
          <SweetAlert
          success
          title="Success Data!"
          onConfirm={hideAlert}
          onCancel={hideAlert}
          timeout={2000}
        >
          This success message will automatically close after 2 seconds
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

export default Timer;
