import AsyncComponent from '../components/AsyncComponent';

export const AsyncDashboardAnalytics = AsyncComponent(() => import('../containers/dashboard/Analytics'));
export const AsyncDashboardEcommerce = AsyncComponent(() => import('../containers/dashboard/Ecommerce'));
const AsyncLogin = AsyncComponent(() => import('../containers/pages/authentication/Login'));

export const dashboardRoutes = {
    path: "/",
    name: "Dashboards",
    component: AsyncDashboardEcommerce,
    badgeColor: "primary",
    badgeText: "5",
    containsHome: true,
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

export const authRoutes = {
    path: "/auth",
    name: "Authentication",
    badgeColor: "primary",
    badgeText: "5",
    containsHome: true,
    children: [
        {
            path: "/auth/login",
            name: "Login",
            component: AsyncLogin
        },
    ]
};

export const dashboard = [
    dashboardRoutes
];

export const authentication = [
    authRoutes
]

export default [
    dashboardRoutes,
    authRoutes
];
