import AsyncComponent from '../components/AsyncComponent';

const AsyncBootstrapIcon = AsyncComponent(() => import('../containers/Icon/BootstrapIcon'));
const AsyncDripIcon = AsyncComponent(() => import('../containers/Icon/DripIcon'));
const AsyncFontAwesome = AsyncComponent(() => import('../containers/Icon/FontAwesome'));
const AsyncUnicon = AsyncComponent(() => import('../containers/Icon/Unicon'));

const iconRoutes = {
    path: "/icons/bootstrapicons",
    name: "Bootstrap Icon",
    badgeColor: "primary",
    badgeText: "75",
    containsHome: false,
    children: [
      {
        path: "/icons/bootstrapicons",
        name: "Bootstrap Icon",
        component: AsyncBootstrapIcon
      },
      {
        path: "/icons/dripicons",
        name: "Drip Icon",
        component: AsyncDripIcon
      },
      {
        path: "/icons/font-awesome",
        name: "Font Awesome",
        component: AsyncFontAwesome
      },
      {
        path: "/icons/unicon",
        name: "Unicon",
        component: AsyncUnicon
      }
    ]
};

export default iconRoutes;
