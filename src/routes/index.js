import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asyncDashboardAnalytics = asyncComponent(() => import('../containers/Dashboard/DashboardAnalytics'));
const asyncDashboardEcommerce = asyncComponent(() => import('../containers/Dashboard/DashboardEcommerce'));
const asyncLogin = asyncComponent(() => import('../containers/Pages/Authentication/Login'));

export const dashboardRoutes = {
    path: "/",
    name: "Dashboards",
    component: asyncDashboardEcommerce,
    badgeColor: "primary",
    badgeText: "5",
    containsHome: true,
    children: [
      {
        path: "/",
        name: "Ecommerce",
        component: asyncDashboardEcommerce
      },
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        component: asyncDashboardAnalytics
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
            component: asyncLogin
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
