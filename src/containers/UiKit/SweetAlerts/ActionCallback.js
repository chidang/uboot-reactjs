import React, { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from "react-bootstrap";

const Basic = () => {
    const [alert, setAlert] = useState(null);
    const hideAlert = () => {
        setAlert(null);
    }
    const deleteFile = () => {
      console.log("Delete File");
      setAlert(null);
    }
    const successAlert = () => {
        setAlert(
          <SweetAlert
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={deleteFile}
            onCancel={hideAlert}
            focusCancelBtn
          >
            You will not be able to recover this imaginary file!
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

export default Basic;
