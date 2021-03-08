import AsyncComponent from '../components/AsyncComponent';

const AsyncNotFoundError = AsyncComponent(() => import('../containers/Pages/Errors/NotFoundError'));
const AsyncInternalServerError = AsyncComponent(() => import('../containers/Pages/Errors/InternalServerError'));
const AsyncContact = AsyncComponent(() => import('../containers/Pages/Contact'));
const AsyncFaq = AsyncComponent(() => import('../containers/Pages/Faq'));
const AsyncInvoice = AsyncComponent(() => import('../containers/Pages/Invoice'));
const AsyncPricing = AsyncComponent(() => import('../containers/Pages/Pricing'));
const AsyncProfile = AsyncComponent(() => import('../containers/Pages/Profile'));
const AsyncStarter = AsyncComponent(() => import('../containers/Pages/Starter'));
const AsyncProjectStructure = AsyncComponent(() => import('../containers/Pages/ProjectStructure'));

const PageRoutes = {
    key: 'page',
    name: "Page",
    badgeColor: "primary",
    badgeText: "8",
    containsHome: false,
    icon: 'bi-book',
    children: [
      {
        path: "/pages/page-not-found",
        name: "Error 404",
        component: AsyncNotFoundError
      },
      {
        path: "/pages/internal-server-error",
        name: "Internal Server Error",
        component: AsyncInternalServerError
      },
      {
        path: "/pages/contact",
        name: "Contact",
        component: AsyncContact
      },
      {
        path: "/pages/faq",
        name: "FAQ",
        component: AsyncFaq
      },
      {
        path: "/pages/invoice",
        name: "Invoice",
        component: AsyncInvoice
      },
      {
        path: "/pages/pricing",
        name: "Pricing",
        component: AsyncPricing
      },
      {
        path: "/pages/profile",
        name: "Profile",
        component: AsyncProfile
      },
      {
        path: "/pages/starter",
        name: "Starter",
        component: AsyncStarter
      },
      // {
      //   path: "/pages/project-structure",
      //   name: "Project Structure",
      //   component: AsyncProjectStructure
      // }
    ]
};

export default PageRoutes;
