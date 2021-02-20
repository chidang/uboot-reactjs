import AsyncComponent from '../components/AsyncComponent';

const AsyncBasicElements = AsyncComponent(() => import('../containers/Form/BasicElements'));

const chartRoutes = {
    key: 'chart',
    path: "/charts/todo",
    name: "Chart",
    badgeColor: "primary",
    badgeText: "75",
    containsHome: false,
    icon: 'bi-bar-chart',
    children: [
      {
        path: "/charts/todo",
        name: "Todo",
        component: AsyncBasicElements
      }
    ]
};

export default chartRoutes;