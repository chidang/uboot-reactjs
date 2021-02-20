import AsyncComponent from '../components/AsyncComponent';
const AsyncDashboardAnalytics = AsyncComponent(() => import('../containers/Dashboard/Analytics'));
const AsyncDashboardEcommerce = AsyncComponent(() => import('../containers/Dashboard/Ecommerce'));

const dashboardRoutes = {
    key: 'dashboard',
    path: "/",
    name: "Dashboards",
    component: AsyncDashboardEcommerce,
    badgeColor: "primary",
    badgeText: "2",
    containsHome: true,
    icon: 'bi-sliders',
    header: "Main",
    children: [
      {
        path: "/dashboard/ecommerce",
        name: "Ecommerce",
        component: AsyncDashboardEcommerce
      },
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        component: AsyncDashboardAnalytics
      }
    ]
};

export default dashboardRoutes;
