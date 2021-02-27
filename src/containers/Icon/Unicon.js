import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import icons from '../../data/unicons.json';
import IconItem from '../../components/IconItem';

const Unicon = () => {
    const [data, setData] = useState(icons);
    const [searchValue, setSearchValue] = useState('')

    const handleSearchValue = event => {
        setSearchValue(event.target.value);
    };

    const filterIcons = list => {
        return list.filter(item => {
            return (
                item.label
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            );
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let result = filterIcons(icons);
        setData(result);
        event.stopPropagation();
    };
    return (
    <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0 fs-base">
            <li className="breadcrumb-item"><a href="#">Uboot</a></li>
            <li className="breadcrumb-item"><span>Icons</span></li>
            <li className="breadcrumb-item"><span>Unicons</span></li>
            <li className="breadcrumb-item active" aria-current="page">Line</li>
            </ol>
        </nav>
        <div className="header mb-4">
            <h1 className="header-title h3">
            <i className="bi-gift text-primary" />
            Unicons: Line
            </h1>
        </div>
        <div className="form-group mb-3">
            <Form id="search-icons" onSubmit={handleSubmit}>
                <div className="input-group">
                    <Form.Control
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchValue}
                    onChange={(e) => handleSearchValue(e)}
                    />
                    <div className="input-group-append">
                        <Button className="btn btn-primary" type="submit"><i className="bi-search" /></Button>
                    </div>
                </div>
            </Form>
        </div>
        <div className="card">
            <div className="card-body">
            <div className="text-center">
                <ul id="icon-list" className="ps-0">
                    { data.map((icon, _key) => (
                        <IconItem
                        key={_key}
                        icon={icon}
                        prefix="uil uil-"
                        />
                    ))} 
                </ul>
            </div>
            </div>
        </div>
    </>)
}

export default Unicon;
