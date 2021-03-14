import { Link } from "react-router-dom";
import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import defaultSrc from "../../assets/images/picture.jpg";

const ImageCropper = () => {
    const [image, setImage] = useState(defaultSrc);
    const [cropData, setCropData] = useState("");
    const [cropper, setCropper] = useState();
    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        }
        else if (e.target) {
            files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };
    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
    };
    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item"><span>UI Kit</span></li>
                <li className="breadcrumb-item active" aria-current="page">Image Cropper</li>
            </ol>
        </nav>
        <div className="header mb-5">
            <h1 className="header-title h3">
                <i className="bi-star text-primary" /> Image Cropper <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
            </h1>
        </div>
        <div>
            <div style={{ width: "100%" }}>
                <div className="form-file">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="uploadNewFile">Upload New Image</label>
                        <input type="file" className="form-control" id="uploadNewFile" onChange={onChange} />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Use Default Image</button>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-9">
                        <Cropper
                            style={{ height: 400, width: "100%" }}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            viewMode={1}
                            guides={true}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                        />
                    </div>
                    <div className="col-md-3">
                        <h3>Preview</h3>
                        <div
                            className="img-preview"
                            style={{ width: "100%", height: "300px", overflow: "hidden" }}
                        />
                    </div>
                </div>
            </div>
            <div className="d-flex my-5 justify-content-center">
                <button type="button" className="btn btn-primary btn-lg mb-4" onClick={getCropData}>
                    <i className="bi-crop" /> <span>Crop Image</span>
                </button>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-8">
                    { !!cropData && <img style={{ width: "100%" }} src={cropData} alt="cropped" /> }
                </div>
            </div>
        </div>
    </>
}

export default ImageCropper;
