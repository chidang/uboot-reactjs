import AsyncComponent from '../components/AsyncComponent';

const AsyncBasicElements = AsyncComponent(() => import('../containers/Form/BasicElements'));

const chartRoutes = {
    path: "/charts/todo",
    name: "Todo",
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