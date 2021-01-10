import AsyncComponent from '../components/AsyncComponent';

export const AsyncDashboardAnalytics = AsyncComponent(() => import('../containers/Dashboard/Analytics'));
export const AsyncDashboardEcommerce = AsyncComponent(() => import('../containers/Dashboard/Ecommerce'));
export const AsyncCalendar = AsyncComponent(() => import('../containers/Calendar'));
export const AsyncChat = AsyncComponent(() => import('../containers/Chat'));
const AsyncLogin = AsyncComponent(() => import('../containers/Pages/Authentication/Login'));

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

export const calendarRoutes = {
    path: "/calendar",
    name: "Calendar",
    component: AsyncCalendar,
    badgeColor: "primary"
};

export const chatRoutes = {
    path: "/chat",
    name: "Chat",
    component: AsyncChat,
    badgeColor: "primary"
};

export const dashboard = [
    dashboardRoutes
];

export const authentication = [
    authRoutes
];

export const calendar = [
    calendarRoutes
];

export const chat = [
    chatRoutes
];

export default [
    dashboardRoutes,
    authRoutes,
    calendarRoutes,
    chatRoutes
];
