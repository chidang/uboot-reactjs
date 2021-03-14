import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Basic from "./Basic";
import SmallButton from "./SmallButton";
import TitleWithTextUnder from "./TitleWithTextUnder";
import SuccessMessage from "./SuccessMessage";
import ActionCallback from "./ActionCallback";
import CustomIcon from "./CustomIcon";
import HtmlMessage from "./HtmlMessage";
import Timer from "./Timer";

const SweetAlerts = () => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb ps-0 fs-base">
                    <li className="breadcrumb-item"><Link to="/">Uboot</Link></li>
                    <li className="breadcrumb-item"><span>UI Kit</span></li>
                    <li className="breadcrumb-item active" aria-current="page">Sweet Alert</li>
                </ol>
            </nav>
            <div className="header mb-5">
                <h1 className="header-title h3">
                    <i className="bi-star text-primary" /> Sweet Alert <sup className="badge bg-primary fw-300 fs-xs">ADDON</sup>
                    <p className="mt-2">SweetAlert for React/Bootstrap. A beautiful replacement for JavaScript's "alert"</p>
                </h1>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="fw-700 m-0 fs-base">Sweet Alert</h4>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-middle text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>
                                                A basic message
                                            </td>
                                            <td>
                                                <Basic />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Small Buttons
                                            </td>
                                            <td>
                                                <SmallButton />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                A title with text under
                                            </td>
                                            <td>
                                                <TitleWithTextUnder />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                A success message!
                                            </td>
                                            <td>
                                                <SuccessMessage />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            A warning message, with Cancel and Confirm callbacks
                                            </td>
                                            <td>
                                                <ActionCallback />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            A message with a custom icon and close button
                                            </td>
                                            <td>
                                                <CustomIcon />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            An HTML message
                                            </td>
                                            <td>
                                                <HtmlMessage />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            A success message, with a close timer
                                            </td>
                                            <td>
                                                <Timer />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SweetAlerts;
