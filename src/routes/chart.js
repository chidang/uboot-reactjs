import AsyncComponent from '../components/AsyncComponent';

const AsyncApexCharts = AsyncComponent(() => import('../containers/Chart/ApexCharts'));
const AsyncChartjs = AsyncComponent(() => import('../containers/Chart/Chartsjs'));

const apexChartRoutes = {
    key: 'chart',
    name: "Chart",
    badgeColor: "primary",
    badgeText: "14",
    containsHome: false,
    icon: 'bi-bar-chart',
    children: [
      {
        path: "/charts/apexcharts",
        name: "Apex Charts",
        component: AsyncApexCharts
      },
      {
        path: "/charts/chartjs",
        name: "Chartjs",
        component: AsyncChartjs
      }
    ]
};

export default apexChartRoutes;