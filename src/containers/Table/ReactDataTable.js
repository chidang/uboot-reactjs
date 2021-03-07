import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import DataTable from 'react-data-table-component';
import SettingContext from '../../context/setting-context';
import axios from 'axios';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true
  },
  {
    name: 'Position',
    selector: 'position',
    sortable: true,
    right: true
  },
  {
    name: 'Company',
    selector: 'company',
    sortable: true,
    right: true
  },
  {
    name: 'Zip Code',
    selector: 'zipcode',
    sortable: true,
    right: true
  }
];

const ReactDataTable = () => {
  const [data, setData] = useState([]);
  const settingContext = useContext(SettingContext);
  const themeMode = settingContext.themeMode.replace('-mode', '');
  const customStyles = {
    headCells: {
      style: {
        fontWeight: '700'
      },
    },
  };

  useEffect(() => {
    (async () => {
      const result = await axios("https://60311aa1081a010017546cb9.mockapi.io/api/v1/articles");
      setData(result.data);
    })();
  }, []);
  
  return (
    <>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb ps-0 fs-base">
        <li className="breadcrumb-item"><Link to="#">Uboot</Link></li>
        <li className="breadcrumb-item"><span>Tables</span></li>
        <li className="breadcrumb-item active" aria-current="page">React Data Table</li>
        </ol>
    </nav>
    <div className="d-flex header justify-content-between mb-2">
        <h1 className="header-title h3">
        <i className="bi-table text-primary" /> React Data Table
        </h1>
    </div>
    <DataTable
      data={data}
      columns={columns}
      pagination='true'
      paginationPerPage='20'
      theme={themeMode}
      customStyles={customStyles}
    />
    </>
  )
}

export default ReactDataTable;
