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
    <DataTable
      data={data}
      columns={columns}
      pagination='true'
      paginationPerPage='20'
      theme={themeMode}
      customStyles={customStyles}
    />
  )
}

export default ReactDataTable;
