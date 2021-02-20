import AsyncComponent from '../components/AsyncComponent';

const AsyncBasicTable = AsyncComponent(() => import('../containers/Table/BasicTable'));
const AsyncDataTable = AsyncComponent(() => import('../containers/Table/DataTable'));

const tableRoutes = {
    key: "tables",
    name: "Table",
    badgeColor: "primary",
    containsHome: false,
    icon: 'bi-table',
    children: [
      {
        path: "/tables/basic-table",
        name: "Basic Table",
        component: AsyncBasicTable
      },
      {
        path: "/tables/data-table",
        name: "Data Table",
        component: AsyncDataTable
      }
    ]
};

export default tableRoutes;
