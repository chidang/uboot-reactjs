import React, { useState } from 'react';
import DualListBox from 'react-dual-listbox';
import { Link } from "react-router-dom";

const options = [
    {
        label: 'Earth',
        options: [
            { value: 'luna', label: 'Moon' },
        ],
    },
    {
        label: 'Mars',
        options: [
            { value: 'phobos', label: 'Phobos' },
            { value: 'deimos', label: 'Deimos' },
        ],
    },
    {
        label: 'Jupiter',
        options: [
            { value: 'io', label: 'Io' },
            { value: 'europa', label: 'Europa' },
            { value: 'ganymede', label: 'Ganymede' },
            { value: 'callisto', label: 'Callisto' },
        ],
    },
];

const Optgroups = () => {
    const [selectedItems, setSelectedItems] = useState(['luna']);

    const changeHandle = (newItems) => {
        setSelectedItems(newItems)
    }

    return (
        <div className="card">
            <div className="card-header justify-content-between">
                <h4 className="fw-700 m-0 fs-base">
                Optgroups
                </h4>
                <div className="card-widgets">
                    <Link className="btn btn-success" to="#" data-action="fullscreen"><i className="bi-fullscreen" /></Link>
                    <Link className="btn btn-warning" to="#" data-toggle="collapse" data-target="#cardAdjustedBill" role="button" aria-expanded="false" aria-controls="cardAdjustedBill"><i className="dripicons-minus" /></Link>
                    <Link className="btn btn-danger" to="#" data-toggle="remove"><i className="bi-x" /></Link>
                </div>
            </div>
            <div className="card-body show">
                <DualListBox
                    options={options}
                    selected={selectedItems}
                    onChange={changeHandle}
                />
            </div>
        </div>
    );
};

export default Optgroups;