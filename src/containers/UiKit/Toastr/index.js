import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { toastr } from "react-redux-toastr";

const Toastr = () => {
    const [title, setTitle] = useState('Hello');
    const [message, setMessage] = useState('');
    const [showCloseButton, setShowCloseButton] = useState(true)
    const [timeOut, setTimeOut] = useState(5000);
    const [type, setType] = useState('success');
    const [progressBar, setProgressBar] = useState(true);
    const [position, setPosition] = useState('top-right');

    const handleTitleInput = e => {
        setTitle(e.target.value);
    };

    const handleMessageInput = e => {
        setMessage(e.target.value);
    };

    const showT = () => {
        const toastrConfirmOptions = {
            onOk: () => console.log('OK: clicked'),
            onCancel: () => console.log('CANCEL: clicked')
        };
        toastr.confirm('Are you sure about that!', toastrConfirmOptions);
    }

    useEffect(
        () => {
            showT()
        }, []
    )

    const showToastr = () => {
        alert()
        const options = {
          timeOut: parseInt(timeOut),
          showCloseButton: showCloseButton,
          progressBar: progressBar,
          position: position
        };

        // const toastrInstance = ((type) => {
        //     switch (type) {
        //         case "info" : return toastr.info; 
        //         case "warning" : return toastr.warning; 
        //         case "error" : return toastr.error; 
        //         default : return toastr.success;
        //     }
        // })();

        const toastrInstance =
        type === "info"
        ? toastr.info
        : type === "warning"
        ? toastr.warning
        : type === "error"
        ? toastr.error
        : toastr.success;

        console.log(toastrInstance)
        toastrInstance(
          title,
          message || "React toastr message implemented with Redux, primary consists of three things: a reducer, toastr emitter and a React component.",
          options
        );
      }

    return <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
                <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                <li className="breadcrumb-item"><span>UI Kit</span></li>
                <li className="breadcrumb-item active" aria-current="page"> Toastr Notifications</li>
            </ol>
        </nav>
        <div className="header mb-4">
            <h1 className="header-title h3">
                <i className="bi-bell text-primary" />  Toastr Notifications
            </h1>
            <p className="mt-2">
                React toastr message implemented with Redux, primary consists of three things: a reducer, toastr emitter and a React component.
            </p>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header justify-content-between">
                        <h4 className="fw-700 m-0 fs-base">
                            Toastr Notifications Examples
                        </h4>
                    </div>
                    <div className="card-body show">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group mb-2">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter a title ..."
                                        onChange={handleTitleInput}
                                        value={title}
                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows={3}
                                        placeholder="Enter a message ..."
                                        onChange={handleMessageInput}
                                        value={message}
                                    />
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="custom-checkbox d-block">
                                            <input id="closeButton" type="checkbox" defaultValue="checked" />Close Button
                                            <span />
                                        </label>
                                        <label className="custom-checkbox d-block">
                                            <input id="addBehaviorOnToastClick" type="checkbox" defaultValue="checked" />Add behavior on toast click
                                            <span />
                                        </label>
                                        <label className="custom-checkbox d-block">
                                            <input id="debugInfo" type="checkbox" defaultValue="checked" />Debug
                                            <span />
                                        </label>
                                        <label className="custom-checkbox d-block">
                                            <input id="progressBar" type="checkbox" defaultValue="checked" />Progress Bar
                                            <span />
                                        </label>
                                        <label className="custom-checkbox d-block">
                                            <input id="preventDuplicates" type="checkbox" defaultValue="checked" />Prevent Duplicates
                                            <span />
                                        </label>
                                        <label className="custom-checkbox d-block">
                                            <input id="addClear" type="checkbox" defaultValue="checked" />Add button to force clearing a toast, ignoring focus
                                            <span />
                                        </label>
                                        <label className="custom-checkbox d-block">
                                            <input id="newestOnTop" type="checkbox" defaultValue="checked" />Newest on top
                                            <span />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="form-group">
                                    <label>Toast Type</label>
                                    <div className="custom-radio-list" id="toastTypeGroup">
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="toasts" defaultChecked defaultValue="success" />Success
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="toasts" defaultValue="info" />Info
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="toasts" defaultValue="warning" />Warning
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="toasts" defaultValue="error" />Error
                                            <span />
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Position</label>
                                    <div className="custom-radio-list" id="positionGroup">
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-top-right" defaultChecked />Top Right
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-bottom-right" />Bottom Right
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-bottom-left" />Bottom Left
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-top-left" />Top Left
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-top-full-width" />Top Full Width
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-bottom-full-width" />Bottom Full Width
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-top-center" />Top Center
                                            <span />
                                        </label>
                                        <label className="custom-radio d-block">
                                            <input type="radio" name="positions" defaultValue="toast-bottom-center" />Bottom Center
                                            <span />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="form-group mb-2">
                                    <label htmlFor="showEasing">Show Easing</label>
                                    <input id="showEasing" type="text" className="form-control" placeholder="swing, linear" defaultValue="swing" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="hideEasing">Hide Easing</label>
                                    <input id="hideEasing" type="text" className="form-control" placeholder="swing, linear" defaultValue="linear" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="showMethod">Show Method</label>
                                    <input id="showMethod" type="text" className="form-control" placeholder="show, fadeIn, slideDown" defaultValue="fadeIn" />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="hideMethod">Hide Method</label>
                                    <input id="hideMethod" type="text" className="form-control" placeholder="hide, fadeOut, slideUp" defaultValue="fadeOut" />
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="form-group mb-2">
                                    <label htmlFor="showDuration">Show Duration</label>
                                    <input id="showDuration" type="text" className="form-control" placeholder="ms" defaultValue={300} />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="hideDuration">Hide Duration</label>
                                    <input id="hideDuration" type="text" className="form-control" placeholder="ms" defaultValue={1000} />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="timeOut">Time out</label>
                                    <input id="timeOut" type="text" className="form-control" placeholder="ms" defaultValue={5000} />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="extendedTimeOut">Extended time out</label>
                                    <input id="extendedTimeOut" className="form-control" type="text" placeholder="ms" defaultValue={1000} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row w-100">
                            <div className="col-lg-8 offset-lg-4">
                                <button className="btn btn-primary" id="showtoast" onClick={() => showT()}>Show Toast</button>
                                <button className="btn btn-danger mx-2" id="cleartoasts">Clear Toasts</button>
                                <button className="btn btn-warning" id="clearlasttoast">Clear Last Toast</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
}

export default Toastr;
