import AsyncComponent from '../components/AsyncComponent';
const AsyncLogin = AsyncComponent(() => import('../containers/Pages/Authentication/Login'));

const authRoutes = {
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

export default authRoutes;
