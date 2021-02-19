import AsyncComponent from '../components/AsyncComponent';
import ecommerceRoutes from './ecommerce';
import dashboardRoutes from './dashboard';
import authRoutes from './auth';
import pageRoutes from './page';
import uiKitRoutes from './ui';
import formRoutes from './form';
import iconRoutes from './icon';
import tableRoutes from './table';

const AsyncCalendar = AsyncComponent(() => import('../containers/Calendar'));
const AsyncChat = AsyncComponent(() => import('../containers/Chat'));

export const calendarRoutes = {
    path: "/calendar",
    name: "Calendar",
    component: AsyncCalendar,
    icon: 'bi-calendar4',
    badgeColor: "primary"
};

export const chatRoutes = {
    path: "/chat",
    name: "Chat",
    component: AsyncChat,
    icon: 'bi-chat-left-text',
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

export const ecommerces = [
    ecommerceRoutes
];

export const pages = [
    pageRoutes
];

export const uiKits = [
    uiKitRoutes
]

export const forms = [
    formRoutes
]

export const icons = [
    iconRoutes
]

export const tables = [
    tableRoutes
]

export const routes = [
    dashboardRoutes,
    authRoutes,
    calendarRoutes,
    chatRoutes,
    ecommerceRoutes,
    pageRoutes,
    uiKitRoutes,
    formRoutes,
    iconRoutes
];
