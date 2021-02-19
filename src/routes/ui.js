import AsyncComponent from '../components/AsyncComponent';

const AsyncAvatars = AsyncComponent(() => import('../containers/UiKit/Avatars'));
const AsyncBreadCrumbs = AsyncComponent(() => import('../containers/UiKit/BreadCrumbs'));
const AsyncButtons = AsyncComponent(() => import('../containers/UiKit/Buttons'));
const AsyncCards = AsyncComponent(() => import('../containers/UiKit/Cards'));
const AsyncDualListbox = AsyncComponent(() => import('../containers/UiKit/DualListbox'));
const AsyncImageCropper = AsyncComponent(() => import('../containers/UiKit/ImageCropper'));
const AsyncJsTree = AsyncComponent(() => import('../containers/UiKit/JsTree'));
const AsyncNotifications = AsyncComponent(() => import('../containers/UiKit/Notifications'));
const AsyncSpinners = AsyncComponent(() => import('../containers/UiKit/Spinners'));
const AsyncSweetAlert = AsyncComponent(() => import('../containers/UiKit/SweetAlert'));
const AsyncTabs = AsyncComponent(() => import('../containers/UiKit/Tabs'));
const AsyncToastr = AsyncComponent(() => import('../containers/UiKit/Toastr'));
const AsyncWidgets = AsyncComponent(() => import('../containers/UiKit/Widgets'));

const uiKitRoutes = {
    path: "/ui-kits/avatars",
    name: "Avatars",
    badgeColor: "primary",
    badgeText: "75",
    containsHome: false,
    icon: 'bi-gem',
    header: 'Component',
    children: [
      {
        path: "/ui-kits/avatars",
        name: "Avatars",
        component: AsyncAvatars
      },
      {
        path: "/ui-kits/breadcrumbs",
        name: "BreadCrumbs",
        component: AsyncBreadCrumbs
      },
      {
        path: "/ui-kits/buttons",
        name: "Buttons",
        component: AsyncButtons
      },
      {
        path: "/ui-kits/cards",
        name: "Cards",
        component: AsyncCards
      },
      {
        path: "/ui-kits/dual-listbox",
        name: "DualListbox",
        component: AsyncDualListbox
      },
      {
        path: "/ui-kits/image-cropper",
        name: "ImageCropper",
        component: AsyncImageCropper
      },
      {
        path: "/ui-kits/jstree",
        name: "JsTree",
        component: AsyncJsTree
      },
      {
        path: "/ui-kits/notifications",
        name: "Notifications",
        component: AsyncNotifications
      },
      {
        path: "/ui-kits/spinners",
        name: "Spinners",
        component: AsyncSpinners
      },
      {
        path: "/ui-kits/sweetalert",
        name: "SweetAlert",
        component: AsyncSweetAlert
      },
      {
        path: "/ui-kits/tabs",
        name: "Tabs",
        component: AsyncTabs
      },
      {
        path: "/ui-kits/toastr",
        name: "Toastr",
        component: AsyncToastr
      },
      {
        path: "/ui-kits/widgets",
        name: "Widgets",
        component: AsyncWidgets
      }
    ]
};

export default uiKitRoutes;
