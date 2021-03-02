import { Link } from "react-router-dom";
import Dropzone from 'react-dropzone'

const Dropzonejs = () => {
    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
                <li className="breadcrumb-item"><span>Form</span></li>
                <li className="breadcrumb-item active" aria-current="page">Dropzone</li>
            </ol>
        </nav>
        <div className="header mb-5">
            <h1 className="header-title h3">
                <i className="bi-star text-primary" /> Dropzone <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
            </h1>
            <p className="mt-2">
                Simple React hook to create a HTML5-compliant drag'n'drop zone for files.
            </p>
        </div>
        <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
                <section className="dropzone">
                    <div {...getRootProps()} className="dz-message">
                        <div className="mb-4">
                            <button className="btn btn-primary">
                                <i className="bi-cloud-arrow-up me-2" />
                                <span>Add file</span>
                            </button>
                        </div>
                        <span className="text-uppercase">or drop files to upload.</span>
                        <input {...getInputProps()} />
                        <p>This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.</p>
                    </div>
                </section>
            )}
        </Dropzone>
    </>
}

export default Dropzonejs;
