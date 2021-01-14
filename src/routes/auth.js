import AsyncComponent from '../components/AsyncComponent';
const AsyncLogin = AsyncComponent(() => import('../containers/Pages/Authentication/Login'));
const AsyncRegister = AsyncComponent(() => import('../containers/Pages/Authentication/Register'));
const AsyncForgotPassword = AsyncComponent(() => import('../containers/Pages/Authentication/ForgotPassword'));
const AsyncConfirmEmail  = AsyncComponent(() => import('../containers/Pages/Authentication/ConfirmEmail'));
const AsyncMaintenance = AsyncComponent(() => import('../containers/Pages/Maintenance'));

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
        {
            path: "/auth/register",
            name: "Register",
            component: AsyncRegister
        },
        {
            path: "/auth/forgot-password",
            name: "Forgot Password",
            component: AsyncForgotPassword
        },
        {
            path: "/auth/confirm-email",
            name: "Confirm Email",
            component: AsyncConfirmEmail
        },
        {
            path: "/pages/maintenance",
            name: "Maintenance",
            component: AsyncMaintenance
        },
    ]
};

export default authRoutes;
